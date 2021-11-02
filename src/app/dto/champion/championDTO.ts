import { ChampionInfoDTO } from "./championDetail/championInfoDTO";
import { ImageDTO } from "./championDetail/imageDTO";
import { StatsDTO } from "./championDetail/statsDTO";
import { SkinDTO } from "./championDetail/skinDTO";
import { SpellDTO } from "./championDetail/spellDTO";
import { PassiveDTO } from "./championDetail/passiveDTO";

export interface ChampionDTO{
  id: number;
  key: string;
  name: string;
  title: string;
  image: ImageDTO;
  skins: SkinDTO[];
  lore: string;
  blurb: string;
  allyTips: string[];
  enemyTips: string[];
  tags: string[];
  partype: string;
  info: ChampionInfoDTO;
  stats: StatsDTO;
  spells: SpellDTO[];
  passive: PassiveDTO;
}
