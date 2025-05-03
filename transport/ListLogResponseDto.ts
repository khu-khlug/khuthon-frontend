import { UserRole } from "@khlug/constant";
import { LogType } from "@khlug/constant/log";

type ListLogResponseRequester = {
  id: string;
  role: UserRole;
  name: string;
};

export type ListLogResponseLog = {
  id: string;
  type: LogType;
  message: string;
  requester: ListLogResponseRequester | null;
  createdAt: Date;
};

export type ListLogResponseDto = {
  logs: ListLogResponseLog[];
  count: number;
};
