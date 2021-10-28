import { ChampionDTO } from "./championDTO";

export class ChampionDataDTO {
  type: string;
  format: string;
  version: string;
  data: Map<string, ChampionDTO>;
}
