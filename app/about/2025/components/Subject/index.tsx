type SubjectData = {
  opened: boolean;
  subject: string | null;
};

export default async function Subject() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subject`, {
    cache: "no-cache",
  });
  const { opened, subject }: SubjectData = await res.json();

  return (
    <ul className="!m-0">
      {opened ? (
        <li>
          <strong>{subject}</strong>
        </li>
      ) : (
        <li className="text-gray-500">D-1 오후 12시에 공개</li>
      )}
    </ul>
  );
}
