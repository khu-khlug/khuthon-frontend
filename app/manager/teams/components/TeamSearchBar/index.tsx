import { FormEvent, useState } from "react";

export type SearchParams = {
  name?: string;
};

type Props = {
  onSearch: (params: SearchParams) => void;
};

export default function TeamSearchBar({ onSearch }: Props) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch({
      name: !!keyword.length ? keyword : undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <button type="submit">검색</button>
    </form>
  );
}
