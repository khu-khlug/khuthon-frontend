import { ListManagerResponseManager } from "@khlug/transport/ListManagerResponseDto";
import { formatDate } from "@khlug/util/formaDate";

type Props = {
  manager: ListManagerResponseManager;
};

export default function ManagerListItem({ manager }: Props) {
  return (
    <div>
      <p>
        <span>{manager.email}</span>
        <span className="ml-8 text-gray-500">
          - {formatDate(new Date(manager.createdAt))} 생성됨
        </span>
      </p>
    </div>
  );
}
