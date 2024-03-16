import Container from "../Container/Container";

type Props = {
  event: {
    registerStartAt: string;
    registerEndAt: string;
    eventStartAt: string;
    eventEndAt: string;
    judgeStartAt: string;
    judgeEndAt: string;
  };
};

export default function EventScheduleContainer({ event }: Props) {
  return (
    <Container>
      <ul>
        <li>
          <strong>접수 기간</strong>: {event.registerStartAt} ~
          {event.registerEndAt}
        </li>
        <li>
          <strong>행사 기간</strong>: {event.eventStartAt} ~ {event.eventEndAt}
        </li>
        <li>
          <strong>심사 기간</strong>: {event.judgeStartAt} ~ {event.judgeEndAt}
        </li>
      </ul>
    </Container>
  );
}
