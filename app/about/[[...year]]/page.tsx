import Callout from "@khlug/components/Callout/Callout";
import Container from "@khlug/components/Container/Container";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{
    year?: string;
  }>;
};

export default async function NotFound(props: Props) {
  const params = await props.params;
  if (!params.year) {
    const thisYear = new Date().getFullYear();
    redirect(`/about/${thisYear}`);
  }

  return (
    <Container>
      <Callout>아직 {params.year}년 행사는 기획 중에 있습니다!</Callout>
    </Container>
  );
}
