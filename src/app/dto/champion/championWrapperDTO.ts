import { ChampionDTO } from "./championDTO";

export interface ChampionWrapperDTO {
  type: string;
  format: string;
  version: string;
  champion: ChampionDTO;
}
