import EventScheduleContainer from "@khlug/components/EventScheduleContainer/EventScheduleContainer";
import ParticipantCounterContainer from "@khlug/components/ParticipantCounterContainer/ParticipantCounterContainer";
import JudgeLoginForm from "@khlug/components/JudgeLoginForm/JudgeLoginForm";

export default function JudgePage() {
  const mockIsLogin = true;
  const mockEvent = {
    registerStartAt: "2023년 10월 30일 월요일 00:00",
    registerEndAt: "2023년 11월 10일 금요일 23:59",
    eventStartAt: "2023년 11월 20일 월요일 00:00",
    eventEndAt: "2023년 11월 24일 금요일 23:59",
    judgeStartAt: "2023년 11월 25일 토요일 00:00",
    judgeEndAt: "2023년 11월 25일 토요일 23:59",
  };

  return mockIsLogin ? (
    <>
      <ParticipantCounterContainer />
      <EventScheduleContainer event={mockEvent} />
    </>
  ) : (
    <JudgeLoginForm />
  );
}
