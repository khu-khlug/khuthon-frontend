import Container from "@khlug/components/Container/Container";
import AttachmentUploadForm from "@khlug/app/team/components/AttachmentUploadForm";
import ProductUrlForm from "@khlug/app/team/components/ProductUrlForm";

export default function ResultContainer() {
  return (
    <Container>
      <AttachmentUploadForm />
      <ProductUrlForm />
    </Container>
  );
}
