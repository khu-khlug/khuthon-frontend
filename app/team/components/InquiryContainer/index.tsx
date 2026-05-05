import { useState } from "react";
import { toast } from "react-toastify";

import BaseModal from "@khlug/components/BaseModal";
import Button from "@khlug/components/Button";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import Container from "@khlug/components/Container/Container";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";

import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";

const MAX_INQUIRY_LENGTH = 1000;

export default function InquiryContainer() {
  const client = useClient();
  const [myTeam] = useMyTeam();

  const [modalOpen, setModalOpen] = useState(false);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    if (loading) return;
    setModalOpen(false);
  };

  const validate = () => {
    const trimmedContent = content.trim();
    if (!trimmedContent) {
      toast.error("문의 내용을 입력해주세요.");
      return false;
    }

    if (trimmedContent.length > MAX_INQUIRY_LENGTH) {
      toast.error("문의 내용은 1000자 이하여야 합니다.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate() || loading) return;

    try {
      setLoading(true);
      await client.post(`/teams/${myTeam.id}/inquiries`, {
        content: content.trim(),
      });
      toast.success("문의가 전송되었습니다.");
      setContent("");
      setModalOpen(false);
    } catch (e) {
      toast.error(extractErrorMessage(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="!pb-4">
      <div className="flex items-center justify-between gap-3">
        <h4 className="!m-0">운영진 문의</h4>
        <Button onClick={() => setModalOpen(true)}>문의하기</Button>
      </div>
      {modalOpen && (
        <div className="top-0 left-0 w-full h-full bg-black/30 fixed p-4 flex justify-center items-center box-border z-50">
          <BaseModal title="운영진 문의" onClose={closeModal}>
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="input_wrap">
                <textarea
                  value={content}
                  maxLength={MAX_INQUIRY_LENGTH}
                  placeholder="문의 내용을 입력해주세요."
                  onChange={(e) => setContent(e.target.value)}
                  readOnly={loading}
                />
              </div>
              <div className="text-right text-gray-500 text-sm mt-2">
                {content.trim().length} / {MAX_INQUIRY_LENGTH}
              </div>
              <div className="text-center mt-4">
                <Button
                  loading={loading}
                  disabled={!content.trim()}
                  formSubmit
                >
                  전송
                </Button>
              </div>
            </form>
          </BaseModal>
        </div>
      )}
    </Container>
  );
}
