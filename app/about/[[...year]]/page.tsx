import Callout from "@khlug/components/Callout/Callout";
import Container from "@khlug/components/Container/Container";
import { redirect } from "next/navigation";

type Props = {
  params: {
    year?: string;
  };
};

export default function NotFound({ params }: Props) {
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
