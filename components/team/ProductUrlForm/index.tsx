import Button from "@khlug/components/Button";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import TextLink from "@khlug/components/TextLink";
import Subtitle from "@khlug/components/Title/Subtitle";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useState } from "react";
import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";

export default function ProductUrlForm() {
  const client = useClient();
  const [myTeam] = useMyTeam();

  const [productUrl, setProductUrl] = useState(myTeam.productUrl ?? "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    if (loading) return;
    setLoading(true);

    try {
      const teamId = myTeam.id;
      await client.put(`/teams/${teamId}/product-urls`, { productUrl });
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }

    setLoading(false);
  };

  return (
    <div>
      <Subtitle>작품 링크</Subtitle>
      <ul className="!m-0">
        <li>여러분이 만든 작품을 소개할 수 있는 링크를 제출해주세요.</li>
        <li>
          경희대학교 학생은{" "}
          <TextLink href="https://swpf.khu.ac.kr/">포트폴리오 사이트</TextLink>
          에 포트폴리오 등록 후 해당 링크를 제출해주세요.
        </li>
        <li>타 대학교 학생은 깃허브 레포지토리 링크를 제출해주세요.</li>
      </ul>
      {message && <div className="error">{message}</div>}
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="input_wrap">
          <input
            type="text"
            value={productUrl}
            onChange={(e) => setProductUrl(e.target.value)}
          />
        </div>
        <div className="text-right mt-4">
          <Button loading={loading} formSubmit>
            저장
          </Button>
        </div>
      </form>
    </div>
  );
}
