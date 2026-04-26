import { Group } from "@khlug/constant";

export type ManagerListTeamRequestDto = {
  name?: string;
  group?: Group;
  confirmed?: boolean;
  awardedOnly?: boolean;
  limit: number;
  offset: number;
};
