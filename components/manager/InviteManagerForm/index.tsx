import { useState } from "react";

type Props = {
  onInvite: (email: string) => void;
};

export default function InviteManagerForm({ onInvite }: Props) {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onInvite(email);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>이메일</label>
      <div className="description">
        운영진으로 초대할 이메일을 입력해주세요. 초대장은 하루동안 유효합니다.
      </div>
      <div className="input_wrap">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="btnArea">
        <button className="black w-full" type="submit">
          <span className="p-4 text-lg">초대하기</span>
        </button>
      </div>
    </form>
  );
}
