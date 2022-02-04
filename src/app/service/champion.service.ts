import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpParams,
  HttpParamsOptions,
} from "@angular/common/http";
import { Constants } from "../util/constants";
import { ChampionDTO } from "../dto/champion/championDTO";
import { BaseChampionDTO } from "../dto/champion/baseChampionDTO";
import { ResponseDTO } from "../dto/responseDTO";
import { SummonerDataDTO } from "../dto/summonerDataDTO";
import { ChampionWrapperDTO } from "../dto/champion/championWrapperDTO";

@Injectable({
  providedIn: "root",
})
export class ChampionService {
  constructor(private http: HttpClient) {}

  getChampionData(): Promise<BaseChampionDTO[]> {
    return this.http
      .get<BaseChampionDTO[]>(
        Constants.CDN_BASE_URL + Constants.CDN_ALL_CHAMP_URL
      )
      .toPromise();
  }

  getChampionDetail(name: string): Promise<ResponseDTO<ChampionWrapperDTO>> {
    const params: HttpParamsOptions = {
      fromString: "name=" + name,
    };
    return this.http
      .get<ResponseDTO<ChampionWrapperDTO>>(
        Constants.BACKEND_BASE_URL + Constants.BACKEND_CHAMP_URL,
        {
          params: new HttpParams(params),
        }
      )
      .toPromise();
  }
}
