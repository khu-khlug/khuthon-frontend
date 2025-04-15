import Callout from "@khlug/components/Callout/Callout";
import EmailVerificationRequestForm from "@khlug/app/register/components/EmailVerificationRequestForm/EmailVerificationRequestForm";
import { useRegister } from "@khlug/app/register/components/MemberRegisterInfoProvider/MemberRegisterInfoProvider";
import { MemberState } from "@khlug/constant";
import CreateTeamForm from "@khlug/app/register/components/CreateTeamForm/CreateTeamForm";
import EmailOtpVerifyForm from "@khlug/app/register/components/EmailOtpVerifyForm/EmailOtpVerifyForm";

export default function RegisterCrossroad() {
  const [memberRegisterInfo] = useRegister();

  return memberRegisterInfo === null ? (
    <EmailVerificationRequestForm />
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
