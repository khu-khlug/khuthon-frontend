import JudgeLoginForm from "@khlug/components/JudgeLoginForm/JudgeLoginForm";

export default function JudgePage() {
  const mockIsLogin = false;

  return mockIsLogin ? <div>Hello</div> : <JudgeLoginForm />;
}
