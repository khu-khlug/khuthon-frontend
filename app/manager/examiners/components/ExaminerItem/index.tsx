import Badge from "@khlug/components/Badge/Badge";
import Button from "@khlug/components/Button";
import { ListExaminerResponseExaminer } from "@khlug/transport/ListExaminerResponseDto";
import { formatDate } from "@khlug/util/formaDate";

type Props = {
  examiner: ListExaminerResponseExaminer;
  onRemove: () => {};
};

export default function ExaminerItem({ examiner, onRemove }: Props) {
  return (
    <div className="flex justify-between items-center">
      <p>
        <span>
          {examiner.name}({examiner.code})
        </span>
        <Badge className="ml-2">{examiner.group} 그룹</Badge>
        <span className="ml-8 text-gray-500">
          - {formatDate(new Date(examiner.createdAt))}에 생성됨
        </span>
      </p>
      <Button onClick={onRemove}>삭제</Button>
    </div>
  );
}
