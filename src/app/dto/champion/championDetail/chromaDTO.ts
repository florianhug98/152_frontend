import { ChromaDescriptionDTO } from "./chromaDescriptionDTO";

export interface ChromaDTO {
  id: number;
  name: string;
  colors: string[];
  description: ChromaDescriptionDTO;
}
