import { ParticipantDTO } from "./participantDTO";
import { TeamDTO } from "./teamDTO";

export interface InfoDTO {
  gameCreation: boolean;
  gameDuration: boolean;
  gameId: number;
  gameMode: string;
  gameName: string;
  gameStartTimestamp: number;
  gameType: string;
  gameVersion: string;
  mapId: number;
  participants: ParticipantDTO[];
  platformId: string;
  queueId: number;
  teams: TeamDTO[];
  tournamentCode: string;
}
