import BaseModal from "@khlug/components/BaseModal";
import { useTeamManageModal } from "../TeamManageModalProvider";
import { ManagerListTeamResponseTeam } from "@khlug/transport/ManagerListTeamResponseDto";
import Dropdown from "@khlug/components/Dropdown";
import { Group } from "@khlug/constant";
import { useState } from "react";
import Button from "@khlug/components/Button";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { toast } from "react-toastify";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";

type Props = {
  team: ManagerListTeamResponseTeam;
  onConfirm: () => void;
};

const NO_GROUP = "그룹 없음";

export default function TeamGroupChangeModal({ team, onConfirm }: Props) {
  const client = useClient();
  const { close } = useTeamManageModal();

  const [group, setGroup] = useState<Group | null>(team.group);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const selectedGroup = value === NO_GROUP ? null : (value as Group);
    setGroup(selectedGroup);
  };

  const handleConfirm = async () => {
    if (confirmLoading) return;
    if (!group) return;

    try {
      setConfirmLoading(true);
      await client.put(`/manager/teams/${team.id}/group`, { group });
      toast.success(`${team.name} 팀의 그룹이 변경되었습니다.`);
    } catch (e) {
      toast.error(extractErrorMessage(e));
    } finally {
      setConfirmLoading(false);
    }

    onConfirm();
    close();
  };

  return (
    <BaseModal title="팀 그룹 변경" onClose={close}>
      <p className="text-base m-0 mt-2">
        {team.name} 팀에 적용할 그룹을 선택해주세요.
      </p>
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
      <div className="text-center mt-4">
        <Button onClick={handleConfirm} loading={confirmLoading}>
          그룹 적용
        </Button>
      </div>
    </BaseModal>
  );
}
