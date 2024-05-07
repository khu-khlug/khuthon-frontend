import Button from "@khlug/components/Button";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import Container from "@khlug/components/Container/Container";
import Subtitle from "@khlug/components/Title/Subtitle";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useState } from "react";

export default function TopicOpenNoticeContainer() {
  const client = useClient();
  const year = new Date().getFullYear();

  const [topic, setTopic] = useState<string>(""); // 주제
  const [topicDetail, setTopicDetail] = useState<string>(""); // 주제 상세
  const [time, setTime] = useState<string>(""); // 대회 시작 시간
  const [location, setLocation] = useState<string>(""); // 대회 장소
  const [enter, setEnter] = useState<string>(""); // 입장 가능 시간

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const validate = () => {
    if (topic.length < 1 || topic.length > 100) {
      setMessage("주제는 1자 이상, 100자 이하여야 합니다.");
      return false;
    }
    if (topicDetail.length < 1 || topicDetail.length > 100) {
      setMessage("주제 상세는 1자 이상, 100자 이하여야 합니다.");
      return false;
    }
    if (time.length < 1 || time.length > 100) {
      setMessage("대회 시작 시간은 1자 이상, 100자 이하여야 합니다.");
      return false;
    }
    if (location.length < 1 || location.length > 100) {
      setMessage("대회 장소는 1자 이상, 100자 이하여야 합니다.");
      return false;
    }
    if (enter.length < 1 || enter.length > 100) {
      setMessage("입장 가능 시간은 1자 이상, 100자 이하여야 합니다.");
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
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await client.post("/manager/alimtalk/send-topic-open", {
        topic,
        topicDetail,
        time,
        location,
        enter,
      });

      setMessage("알림톡이 성공적으로 발송되었습니다.");
      setTopic("");
      setTopicDetail("");
      setTime("");
      setLocation("");
      setEnter("");
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }

    setLoading(false);
  };

  return (
    <Container>
      <Subtitle>주제 공개 안내</Subtitle>
      <p>활성 상태(ACTIVE)에 있는 모든 참가자에게 주제 공개 안내를 보냅니다.</p>
      {message && <div className="error">{message}</div>}
      <form onSubmit={handleNoticeTopicOpen}>
        <div className="flex gap-4">
          <div className="grow">
            <label>주제</label>
            <div className="input_wrap">
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            <label>주제 상세</label>
            <div className="input_wrap">
              <input
                type="text"
                value={topicDetail}
                onChange={(e) => setTopicDetail(e.target.value)}
              />
            </div>
            <label>대회 시작 시간</label>
            <div className="input_wrap">
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <label>대회 장소</label>
            <div className="input_wrap">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <label>입장 가능 시간</label>
            <div className="input_wrap">
              <input
                type="text"
                value={enter}
                onChange={(e) => setEnter(e.target.value)}
              />
            </div>
          </div>
          <div className="w-1/5 leading-6">
            <label>알림톡 미리보기</label>
            <div className="border p-4 rounded-lg bg-gray-100">
              <p>
                khuthon 주제 공개 안내
                <br />
                주제명: {topic}
              </p>
              <p>
                khuthon {year} 주제가 공개되었습니다. 주제는 &quot;{topicDetail}
                &quot;입니다. 주어진 주제와 연결하여 자유롭게 작품을 구상하시면
                됩니다.
              </p>
              <p>
                그러면 {time}에 {location}에서 뵙겠습니다. {enter}부터 입장이
                가능하니 참고해주세요! 자세한 일정은 홈페이지 참고 바랍니다.
                감사합니다.
              </p>
              <p>문의: we_are@khlug.org</p>
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
