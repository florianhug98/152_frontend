import { InfoDTO } from "./infoDTO";
import { ImageDTO } from "./imageDTO";
import { StatsDTO } from "./statsDTO";

export class ChampionDTO {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: InfoDTO;
  image: ImageDTO;
  tags: string[];
  partype: string;
  stats: StatsDTO
}
