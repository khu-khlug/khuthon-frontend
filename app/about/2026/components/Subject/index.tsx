type SubjectData = {
  opened: boolean;
  subject: string | null;
};

export default async function Subject() {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subject`, {
  //   cache: "no-cache",
  // });
  // const { opened, subject }: SubjectData = await res.json();

  const opened = false;
  const subject = null;

  return (
    <ul className="!m-0">
      {opened ? (
        <li>
          <strong>{subject}</strong>
        </li>
      ) : (
        <>
          <li className="text-gray-500">
            사전 주제 공개: 2026.05.06 오후 12시에 공개 (가주제 3개)
          </li>
          <li className="text-gray-500">
            실제 주제 공개: 대회 시작 시점 (1개)
          </li>
        </>
      )}
    </ul>
  );
}
