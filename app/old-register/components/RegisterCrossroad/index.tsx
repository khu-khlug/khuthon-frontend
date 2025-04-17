import Callout from "@khlug/components/Callout/Callout";
import MemberRegisterForm from "@khlug/app/old-register/components/MemberRegisterForm";
import { useRegister } from "@khlug/app/old-register/components/MemberRegisterInfoProvider/MemberRegisterInfoProvider";
import { MemberState } from "@khlug/constant";
import CreateTeamForm from "@khlug/app/old-register/components/CreateTeamForm/CreateTeamForm";
import EmailOtpVerifyForm from "@khlug/app/old-register/components/EmailOtpVerifyForm/EmailOtpVerifyForm";
import { useState } from "react";
import LoginForm from "../LoginForm";
import Button from "@khlug/components/Button";
import Subtitle from "@khlug/components/Title/Subtitle";

type UnregisteredFormMode = "login" | "register" | null;

export default function RegisterCrossroad() {
  const [memberRegisterInfo] = useRegister();
  const [mode, setMode] = useState<UnregisteredFormMode>();

  return memberRegisterInfo === null ? (
    (() => {
      switch (mode) {
        case "login":
          return <LoginForm />;
        case "register":
          return <MemberRegisterForm />;
        default:
          return (
            <div>
              <Subtitle>참가 신청</Subtitle>
              <p className="sup">
                아직 khuthon 2025 참가 신청을 시작하지 않았다면, 아래 버튼을
                눌러 처음부터 참가 신청을 진행해주세요.
              </p>
              <div className="text-end">
                <Button onClick={() => setMode("register")}>
                  처음부터 시작하기
                </Button>
              </div>
              <p className="sup">
                만약 절차를 진행하던 중에 어떠한 이유로 참가 신청 과정이 중단된
                경우에는 아래 버튼을 눌러 이어서 진행할 수 있습니다.
              </p>
              <div className="text-end">
                <Button onClick={() => setMode("login")}>
                  이어서 진행하기
                </Button>
              </div>
            </div>
          );
      }
    })()
  ) : memberRegisterInfo.state === MemberState.NEED_VERIFICATION ? (
    <EmailOtpVerifyForm />
  ) : memberRegisterInfo.state === MemberState.NEED_TEAM ? (
    <CreateTeamForm />
  ) : (
    <Callout>
      <strong>접수가 완료되었습니다.</strong>
      <br />
      <span className="text-xl">
        팀 페이지에서 팀 정보를 확인하고, 필요 시 팀원을 초대해주세요!
      </span>
    </Callout>
  );
}
