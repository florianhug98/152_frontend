import { ChampionDTO } from "./championDTO";

export class InfoDTO {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
  data: Map<string, ChampionDTO>;
}
