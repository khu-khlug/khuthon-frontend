import Container from "@khlug/components/Container/Container";
import AttachmentUploadForm from "@khlug/components/team/AttachmentUploadForm";
import ProductUrlForm from "@khlug/components/team/ProductUrlForm";

export default function ResultContainer() {
  return (
    <Container>
      <AttachmentUploadForm />
      <ProductUrlForm />
    </Container>
  );
}
