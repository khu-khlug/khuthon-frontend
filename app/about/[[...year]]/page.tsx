import Callout from "@khlug/components/Callout/Callout";
import Container from "@khlug/components/Container/Container";

type Props = {
  params: {
    year?: string;
  };
};

export default function NotFound({ params }: Props) {
  const year = params.year ? params.year : new Date().getFullYear();
  return (
    <Container>
      <Callout>아직 {year}년 행사는 기획 중에 있습니다!</Callout>
    </Container>
  );
}
