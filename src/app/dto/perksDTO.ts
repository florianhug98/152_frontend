import { PerkStatsDTO } from "./perkStatsDTO";
import { PerkStyleDTO } from "./perkStyleDTO";

export interface PerksDTO {
  statPerks: PerkStatsDTO;
  styles: PerkStyleDTO[];
}
