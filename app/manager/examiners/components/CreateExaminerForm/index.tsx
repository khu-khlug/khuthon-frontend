import Dropdown from "@khlug/components/Dropdown";
import TextField from "@khlug/components/TextField";
import { Group } from "@khlug/constant";
import { useState } from "react";

type Props = {
  onCreate: (name: string, code: string, group: Group) => void;
};

const NO_GROUP = "선택 필요";

export default function CreateExaminerForm({ onCreate }: Props) {
  const [message, setMessage] = useState<string | null>("");
  const [name, setName] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [group, setGroup] = useState<Group | null>(null);

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const selectedGroup = value === NO_GROUP ? null : (value as Group);
    setGroup(selectedGroup);
  };

  const validate = () => {
    if (name.length < 1 || name.length > 100) {
      setMessage("비밀번호는 11자 이상, 100자 이하여야 합니다.");
      return false;
    }
    if (code.length < 1 || code.length > 100) {
      setMessage("비밀번호는 11자 이상, 100자 이하여야 합니다.");
      return false;
    }
    if (!group) {
      setMessage("그룹을 선택해주세요.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    onCreate(name, code, group!);
    setName("");
    setCode("");
    setGroup(Group.A);
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
      <TextField
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        minLength={1}
        maxLength={100}
        placeholder="이름"
        required
      />
      <TextField
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        minLength={1}
        maxLength={100}
        placeholder="코드"
        required
        className="mt-2"
      />
      <Dropdown
        onChange={handleDropdownChange}
        value={group ?? NO_GROUP}
        className="mt-2"
      >
        <option value={NO_GROUP} disabled>
          {NO_GROUP}
        </option>
        {Object.entries(Group).map(([key, value]) => (
          <option key={key} value={value}>
            {value}
          </option>
        ))}
      </Dropdown>
      <div className="btnArea">
        <button className="black w-full" type="submit">
          <span className="p-4 text-lg">추가하기</span>
        </button>
      </div>
    </form>
  );
}
