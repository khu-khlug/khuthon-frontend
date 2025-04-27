import { useCallback, useEffect, useState } from "react";
import Container from "@khlug/components/Container/Container";
import { useEvent } from "@khlug/components/EventProvider/EventProvider";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { toast } from "react-toastify";
import Button from "@khlug/components/Button";

export default function EditStudentInfoForm() {
  const event = useEvent();
  const client = useClient();

  const [college, setCollege] = useState<string>("");
  const [attendedSemesters, setAttendedSemesters] = useState<string>("");

  const loadMemberInfo = useCallback(async () => {
    try {
      const { data } = await client.get<{
        id: string;
        college: string;
        attendedSemesters: number;
      }>("/members/@me");

      setCollege(data.college);
      setAttendedSemesters(data.attendedSemesters.toString());
    } catch (err) {
      toast.error(extractErrorMessage(err));
    }
  }, [client]);

  useEffect(() => {
    loadMemberInfo();
  }, [loadMemberInfo]);

  const validate = () => {
    if (college.length < 1) {
      toast.error("학과의 이름을 입력해주세요.");
      return false;
    }
    if (college.length > 1000) {
      toast.error("학과의 이름이 너무 깁니다.");
      return false;
    }

    if (attendedSemesters.length < 1) {
      toast.error("재학 학기를 입력해주세요.");
      return false;
    }
    const numberRegex = /^\d+$/;
    if (!numberRegex.test(attendedSemesters)) {
      toast.error("재학 학기는 숫자로 입력해주세요.");
      return false;
    }
    if (Number(attendedSemesters) < 1 || Number(attendedSemesters) > 20) {
      toast.error("재학 학기는 1 이상 20 이하의 숫자로 입력해주세요.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await client.put(`/members/@me/student-info`, {
        college,
        attendedSemesters: Number(attendedSemesters),
      });
      toast.success("참가자 세부 정보가 수정되었습니다.");
    } catch (e) {
      toast.error(extractErrorMessage(e));
    }
  };

  return (
    <Container>
      <h4>참가자 세부 정보 입력</h4>
      <form onSubmit={handleSubmit}>
        <label>학과</label>
        <div className="description">
          학과는 복수 전공을 포함한 모든 소속 학과의 이름을 반점(,)으로 구분하여
          작성해주세요. (부전공 제외)
          <br />
          복수전공, 연계전공, 융합전공, 학생설계전공 등 학위과정은 모두 작성.
          부전공, 마이크로디그리 등 비학위과정은 작성하지 않음.
          <br /> ex) 소프트웨어융합대학 컴퓨터공학부, 공과대학 산업경영공학과
        </div>
        <div className="input_wrap">
          <input
            type="text"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            required
          />
        </div>

        <label>재학 학기 수</label>
        <div className="description">
          재학 학기 수는 이번 학기를 포함한 총 재학 학기 수를 입력해주세요.
          <br />
          ex) 신입학 후 3학기 차 = 3학기, 3학년으로 편입학한 학기 = 5학기,
          의학과 등 본과 1학년 = 5학기
        </div>
        <div className="input_wrap">
          <input
            type="text"
            value={attendedSemesters}
            onChange={(e) => setAttendedSemesters(e.target.value)}
            required
          />
        </div>

        <div className="text-right mt-3">
          <Button formSubmit disabled={event.eventRange !== "BEFORE"}>
            수정
          </Button>
        </div>
      </form>
    </Container>
  );
}
