import { isAxiosError } from "axios";

const DEFAULT_MESSAGE =
  "알 수 없는 오류가 발생했어요. 운영진에게 문의해주세요.";

export function extractErrorMessage(e: unknown): string {
  if (!isAxiosError(e)) {
    return DEFAULT_MESSAGE;
  }

  return e.response?.data?.message ?? e.message ?? DEFAULT_MESSAGE;
}
