import { PerkStyleSelectionDTO } from "./perkStyleSelectionDTO";

export interface PerkStyleDTO {
  description: number;
  selections: PerkStyleSelectionDTO[];
  style: number;
}
