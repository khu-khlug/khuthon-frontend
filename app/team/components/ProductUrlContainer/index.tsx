import { useState } from "react";
import { toast } from "react-toastify";

import Button from "@khlug/components/Button";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import TextLink from "@khlug/components/TextLink";
import Subtitle from "@khlug/components/Title/Subtitle";
import Container from "@khlug/components/Container/Container";

import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";

import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useMemberConfigs } from "../MemberConfigProvider";

export default function ProductUrlContainer() {
  const client = useClient();
  const configs = useMemberConfigs();
  const [myTeam] = useMyTeam();

  const [productUrl, setProductUrl] = useState(myTeam.productUrl ?? "");
  const [loading, setLoading] = useState(false);

  const canEdit = configs?.productUrlEditEnabled ?? false;

  const validate = () => {
    if (!URL.canParse(productUrl)) {
      toast.error("올바른 URL을 입력해주세요.");
      return false;
    }

    const parsedUrl = new URL(productUrl);
    if (!["github.com"].includes(parsedUrl.hostname)) {
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
        <li>
          여러분이 만든 작품을 소개할 수 있는{" "}
          <strong>깃허브 레포지토리의 링크</strong>를 제출해주세요.
        </li>
        <li>
          <strong>github.com</strong> 도메인으로 이루어진 링크만 가능합니다.
          (예: https://github.com/khu-khlug/some-repo)
        </li>
      </ul>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="input_wrap">
          <input
            type="text"
            value={productUrl}
            placeholder="작품 링크를 입력해주세요."
            onChange={(e) => setProductUrl(e.target.value)}
            readOnly={!canEdit}
          />
        </div>
        <div className="text-right mt-2">
          <Button loading={loading} formSubmit disabled={!canEdit}>
            저장
          </Button>
        </div>
      </form>
    </Container>
  );
}
