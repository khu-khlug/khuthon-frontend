import Container from "@khlug/components/Container/Container";
import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";
import { useRouter } from "next/navigation";
import KhuthonText from "@khlug/components/KhuthonText";

export default function ConfirmTeamContainer() {
  const [myTeam] = useMyTeam();
  const router = useRouter();

  if (myTeam.confirmed) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 해당 페이지를 보는 참가자는 팀이 존재하며 아직 인원 확정되지 않은 것이므로,
    // crossroad 페이지로 이동시키면 인원 확정 페이지가 나옵니다.
    router.push("/register/crossroad");
  };

  return (
    <Container>
      <h4>인원 확정</h4>
      <form onSubmit={handleSubmit}>
        <div className="description">
          인원 확정 시 팀원을 변경할 수 없으니, 신중히 결정해주세요.
          <br />
          인원 확정까지 완료하면, <KhuthonText /> 참가 신청이 완료됩니다.
        </div>
        <div className="btnArea">
          <button type="submit" className="white">
            <span>인원 확정</span>
          </button>
        </div>
      </form>
    </Container>
  );
}
