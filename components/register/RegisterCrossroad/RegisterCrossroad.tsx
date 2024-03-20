import Callout from "@khlug/components/Callout/Callout";
import EmailVerificationRequestForm from "@khlug/components/register/EmailVerificationRequestForm/EmailVerificationRequestForm";
import { useRegister } from "@khlug/components/register/MemberRegisterInfoProvider/MemberRegisterInfoProvider";
import { MemberState } from "@khlug/constant";
import StudentInfoWithStuauthForm from "@khlug/components/register/StudentInfoWithStuauthForm/StudentInfoWithStuauthForm";
import StudentInfoManuallyForm from "@khlug/components/register/StudentInfoManuallyForm/StudentInfoManuallyForm";
import CreateTeamForm from "@khlug/components/register/CreateTeamForm/CreateTeamForm";
import EmailOtpVerifyForm from "@khlug/components/register/EmailOtpVerifyForm/EmailOtpVerifyForm";

export default function RegisterCrossroad() {
  const [memberRegisterInfo] = useRegister();

  return memberRegisterInfo === null ? (
    <EmailVerificationRequestForm />
  ) : memberRegisterInfo.state === MemberState.NEED_VERIFICATION ? (
    <EmailOtpVerifyForm />
  ) : memberRegisterInfo.state === MemberState.NEED_STUDENT_INFO ? (
    memberRegisterInfo.university === "KYUNGHEE_UNIV" ? (
      <StudentInfoWithStuauthForm />
    ) : (
      <StudentInfoManuallyForm />
    )
  ) : memberRegisterInfo.state === MemberState.NEED_TEAM ? (
    <CreateTeamForm />
  ) : (
    <Callout>이미 접수가 완료되었습니다.</Callout>
  );
}
