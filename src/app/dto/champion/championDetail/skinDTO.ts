import { ChromaDTO } from "./chromaDTO";

export interface SkinDTO{
  id: number;
  isBase: boolean;
  titlePath: string;
  skinType: string;
  rarity: string;
  isLegacy: string;
  description: string;
  chromas?: ChromaDTO[];
}
