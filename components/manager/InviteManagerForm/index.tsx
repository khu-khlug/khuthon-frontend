import { useState } from "react";

type Props = {
  onCreate: (name: string, code: string) => void;
};

export default function CreateExaminerForm({ onCreate }: Props) {
  const [message, setMessage] = useState<string | null>("");
  const [name, setName] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const validate = () => {
    if (name.length < 1 || name.length > 100) {
      setMessage("비밀번호는 11자 이상, 100자 이하여야 합니다.");
      return false;
    }
    if (code.length < 1 || code.length > 100) {
      setMessage("비밀번호는 11자 이상, 100자 이하여야 합니다.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    onCreate(name, code);
    setName("");
    setCode("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {message && <div className="error">{message}</div>}
      <div className="description">
        추가할 심사위원의 이름과 코드를 입력해주세요. 코드는 심사위원이 로그인할
        때 사용됩니다.
        <br />
        이름과 코드 모두 1자 이상, 100자 이하여야 합니다.
      </div>
      <div className="input_wrap">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          minLength={1}
          maxLength={100}
          placeholder="이름"
          required
        />
      </div>
      <div className="input_wrap">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          minLength={1}
          maxLength={100}
          placeholder="코드"
          required
        />
      </div>
      <div className="btnArea">
        <button className="black w-full" type="submit">
          <span className="p-4 text-lg">추가하기</span>
        </button>
      </div>
    </form>
  );
}
