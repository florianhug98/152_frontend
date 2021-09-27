import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpParams,
  HttpParamsOptions,
} from "@angular/common/http";
import { SummonerDTO } from "../dto/summonerDTO";
import { Constants } from "../util/constants";
import { ResponseDTO } from "../dto/responseDTO";
import { LeagueEntryDTO } from "../dto/leagueEntryDTO";

@Injectable({
  providedIn: "root",
})
export class SummonerService {
  constructor(private http: HttpClient) {}

  getSummonerByName(summonerName: String): Promise<ResponseDTO<SummonerDTO>> {
    const params: HttpParamsOptions = {
      fromString: "summonerName=" + summonerName,
    };
    return this.http
      .get<ResponseDTO<SummonerDTO>>(
        Constants.BACKEND_BASE_URL + Constants.BACKEND_SUMMONER_URL,
        {
          params: new HttpParams(params),
        }
      )
      .toPromise();
  }

  getLeagueBySummonerId(
    summonerId: string
  ): Promise<ResponseDTO<LeagueEntryDTO[]>> {
    const params: HttpParamsOptions = {
      fromString: "summonerId=" + summonerId,
    };
    return this.http
      .get<ResponseDTO<LeagueEntryDTO[]>>(
        Constants.BACKEND_BASE_URL + Constants.BACKEND_LEAGUE_URL,
        {
          params: new HttpParams(params),
        }
      )
      .toPromise();
  }
}
