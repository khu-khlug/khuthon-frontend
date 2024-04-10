import { LogType } from "@khlug/constant";

export type ListLogResponseLog = {
  id: string;
  type: LogType;
  message: string;
  requester: string | null;
  createdAt: Date;
};

export type ListLogResponseDto = {
  logs: ListLogResponseLog[];
  count: number;
};
