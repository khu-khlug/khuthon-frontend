import { isAxiosError } from "axios";

export function getErrorMessageFromAxiosError(e: unknown): string {
  if (!isAxiosError(e)) {
    return "알 수 없는 오류가 발생했습니다.";
  }

  return e.message;
}
