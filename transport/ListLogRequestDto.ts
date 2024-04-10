import { LogType } from "@khlug/constant";

export type ListLogRequestDto = {
  type?: LogType;
  limit: number;
  offset: number;
};
