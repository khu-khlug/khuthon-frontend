import Button from "@khlug/components/Button";
import { ListManagerInvitationResponseInvitation } from "@khlug/transport/ListManagerInvitationResponseDto";
import { formatDate } from "@khlug/util/formaDate";

type Props = {
  invitation: ListManagerInvitationResponseInvitation;
  onCancel: () => {};
};

export default function ManagerInvitationItem({ invitation, onCancel }: Props) {
  return (
    <div className="flex justify-between items-center">
      <p>
        <span>{invitation.email}</span>
        <span className="ml-8 text-gray-500">
          - {formatDate(new Date(invitation.expiredAt))}까지 유효함
        </span>
      </p>
      <Button onClick={onCancel}>취소</Button>
    </div>
  );
}
