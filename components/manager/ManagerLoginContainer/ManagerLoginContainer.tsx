import Container from "@khlug/components/Container/Container";
import { useState } from "react";
import ManagerOtpForm from "../ManagerOtpForm/ManagerOtpForm";
import ManagerLoginForm from "../ManagerLoginForm/ManagerLoginForm";

export default function ManagerLoginContainer() {
  const [otpToken, setOtpToken] = useState<string | null>(null);

  return (
    <Container>
      {otpToken ? (
        <ManagerOtpForm otpToken={otpToken} />
      ) : (
        <ManagerLoginForm onOtpToken={setOtpToken} />
      )}
    </Container>
  );
}
