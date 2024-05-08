import Button from "@khlug/components/Button";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import Container from "@khlug/components/Container/Container";
import Subtitle from "@khlug/components/Title/Subtitle";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useState } from "react";

export default function SatisfySurveyNoticeContainer() {
  const client = useClient();
  const year = new Date().getFullYear();

  const [url, setUrl] = useState<string>(""); // 만족도 조사 설문 링크

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const validate = () => {
    if (url.length < 1) {
      setMessage("주제는 1자 이상, 100자 이하여야 합니다.");
      return false;
    }
    if (/^\w+:\/\//.test(url)) {
      setMessage("프로토콜을 포함하지 않은 링크를 입력해주세요.");
      return false;
    }
    return true;
  };

  const handleNoticeTopicOpen = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage(null);
    if (!validate()) return;

    if (loading) return;
    setLoading(true);

    try {
      await client.post("/manager/alimtalk/send-satisfy-survey", {
        url,
      });

      setMessage("알림톡이 성공적으로 발송되었습니다.");
      setUrl("");
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }

    setLoading(false);
  };

  return (
    <Container>
      <Subtitle>만족도 조사 안내</Subtitle>
      <p>참가 확인이 된 모든 참가자에게 만족도 조사 안내를 보냅니다.</p>
      {message && <div className="error">{message}</div>}
      <form onSubmit={handleNoticeTopicOpen}>
        <div className="flex gap-4">
          <div className="grow">
            <label>만족도 조사 링크</label>
            <p className="description">
              프로토콜을 포함하지 않은 링크를 입력해주세요.
            </p>
            <div className="input_wrap">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </div>
          <div className="w-1/5 leading-6">
            <label>알림톡 미리보기</label>
            <div className="border p-4 rounded-lg bg-gray-100">
              <p>
                khuthon
                <br />
                만족도 조사 참여 요청
              </p>
              <p>
                khuthon {year}에 참여해주셔서 대단히 고맙습니다. 참여하신 분들을
                대상으로 만족도 조사를 진행하니 참여 부탁드립니다. 더 나은
                khuthon이 되도록 노력하겠습니다. 감사합니다.
              </p>
              <a
                className="block bg-gray-200 text-black no-underline text-center p-2"
                href={`http://${url}`}
                target="_blank"
              >
                설문조사 바로가기
              </a>
            </div>
          </div>
        </div>
        <Button className="w-full py-2.5 my-4" formSubmit loading={loading}>
          보내기
        </Button>
      </form>
    </Container>
  );
}
