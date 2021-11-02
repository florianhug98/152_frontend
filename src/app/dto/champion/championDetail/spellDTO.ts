import { LeveltipDTO } from "./leveltipDTO";
import { ImageDTO } from "./imageDTO";

export interface SpellDTO {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: LeveltipDTO;
  maxrank: number;
  cooldown: number[];
  cooldownburn: string;
  cost: number[];
  costBurn: string;
  effect: number[];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: ImageDTO;
  resource: string;
}
