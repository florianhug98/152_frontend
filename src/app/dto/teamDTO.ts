import { BanDTO } from "./banDTO";
import { ObjectivesDTO } from "./objectivesDTO";

export interface TeamDTO {
  bans: BanDTO[];
  objectives: ObjectivesDTO;
  teamId: number;
  win: boolean;
}
