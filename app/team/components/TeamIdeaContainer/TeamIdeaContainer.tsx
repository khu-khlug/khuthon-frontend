import { useState } from "react";
import Container from "@khlug/components/Container/Container";
import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { toast } from "react-toastify";
import Button from "@khlug/components/Button";
import { useMemberConfigs } from "../MemberConfigProvider";

export default function TeamIdeaContainer() {
  const client = useClient();
  const configs = useMemberConfigs();
  const [myTeam] = useMyTeam();

  const [idea, setIdea] = useState<string>(myTeam.idea);
  const [loading, setLoading] = useState<boolean>(false);

  const canEdit = configs?.ideaEditEnabled ?? false;

  const validate = () => {
    if (idea.length < 1 || idea.length > 100) {
      toast.error("아이디어는 1자 이상, 500자 이하여야 합니다.");
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
      await client.put(`/teams/${myTeam.id}/ideas`, { idea });
      toast.success("아이디어가 지정되었습니다.");
    } catch (e) {
      toast.error(extractErrorMessage(e));
    }

    setLoading(false);
  };

  return (
    <Container className="!pb-4">
      <h4>아이디어</h4>
      <form onSubmit={handleSubmit}>
        <div className="input_wrap">
          <input
            type="text"
            name="idea"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="아이디어를 입력해주세요."
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
