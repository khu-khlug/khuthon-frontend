import Container from "@khlug/components/Container/Container";
import Subtitle from "@khlug/components/Title/Subtitle";
import Link from "next/link";

export default function AlimtalkGuideContainer() {
  return (
    <Container>
      <Subtitle>알림톡 수신 동의 안내</Subtitle>
      <p className="sup">
        khuthon은 참가자 여러분들께 대회 기간 동안 대회 관련 정보를 카카오톡으로
        제공하기 위해{" "}
        <Link href="https://business.kakao.com/info/bizmessage/">알림톡</Link>
        을 활용합니다. 알림톡을 통해 참가 안내, 중요 공지 및 기타 필수 정보를
        받아보실 수 있습니다.
        <br />
        참가 접수를 완료하시면 알림톡 수신에 대해 동의하였다고 간주합니다.
        <br />
        <br />
        대회 관련 알림톡은 대회를 주관하는 경희대학교 중앙 IT 동아리 쿠러그의{" "}
        <Link href="https://pf.kakao.com/_qxgxiWG">공식 카카오톡 채널</Link>을
        통해 안내됩니다.
      </p>
    </Container>
  );
}
