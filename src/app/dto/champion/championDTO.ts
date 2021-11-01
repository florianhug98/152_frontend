import { TacticalInfoDTO } from "./championDetail/tacticalInfoDTO";
import { PlayStyleInfoDTO } from "./championDetail/playStyleInfoDTO";
import { SkinDTO } from "./championDetail/skinDTO";
import { PassiveDTO } from "./championDetail/passiveDTO";
import { SpellDTO } from "./championDetail/spellDTO";

export interface ChampionDTO{
  id: number;
  name: string;
  alias: string;
  title: string;
  shortBio: string;
  tacticalInfo: TacticalInfoDTO;
  playstyleInfo: PlayStyleInfoDTO;
  squarePortraitPath: string;
  stingerSfxPath: string;
  chooseVoPath: string;
  banVoPath: string;
  roles: string[];
  reccomendedItemDefaults: string[];
  skins: SkinDTO[];
  passive: PassiveDTO;
  spells: SpellDTO[];
}
