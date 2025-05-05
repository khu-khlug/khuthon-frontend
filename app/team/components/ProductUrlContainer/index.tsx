import { useState } from "react";
import { toast } from "react-toastify";

import Button from "@khlug/components/Button";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import TextLink from "@khlug/components/TextLink";
import Subtitle from "@khlug/components/Title/Subtitle";
import Container from "@khlug/components/Container/Container";

import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";

import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";

export default function ProductUrlContainer() {
  const client = useClient();
  const [myTeam] = useMyTeam();

  const [productUrl, setProductUrl] = useState(myTeam.productUrl ?? "");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!URL.canParse(productUrl)) {
      toast.error("올바른 URL을 입력해주세요.");
      return false;
    }

    const parsedUrl = new URL(productUrl);
    if (!["github.com", "swpf.khu.ac.kr"].includes(parsedUrl.hostname)) {
      toast.error("잘못된 사이트 URL 호스트입니다.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    if (loading) return;
    setLoading(true);

    try {
      const teamId = myTeam.id;
      await client.put(`/teams/${teamId}/product-urls`, { productUrl });
      toast.success("작품 링크가 저장되었습니다.");
    } catch (e) {
      toast.error(extractErrorMessage(e));
    }

    setLoading(false);
  };

  return (
    <Container>
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
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="input_wrap">
          <input
            type="text"
            value={productUrl}
            placeholder="작품 링크를 입력해주세요."
            onChange={(e) => setProductUrl(e.target.value)}
          />
        </div>
        <div className="text-right mt-2">
          <Button loading={loading} formSubmit>
            저장
          </Button>
        </div>
      </form>
    </Container>
  );
}
