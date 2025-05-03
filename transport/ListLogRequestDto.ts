import { LogType } from "@khlug/constant/log";

export type ListLogRequestDto = {
  type?: LogType;
  limit: number;
  offset: number;
};
