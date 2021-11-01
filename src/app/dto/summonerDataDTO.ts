import { SummonerDTO } from "./summonerDTO";
import { LeagueEntryDTO } from "./leagueEntryDTO";
import { MatchDTO } from "./matchDTO";

export class SummonerDataDTO {
  summoner: SummonerDTO;
  leagueEntries: LeagueEntryDTO[];
  matches: MatchDTO[];
}
