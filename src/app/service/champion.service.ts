import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions } from "@angular/common/http";
import { Constants } from "../util/constants";
import { BaseChampionDTO } from "../dto/champion/baseChampionDTO";
import { ChampionDTO } from "../dto/champion/championDTO";

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  constructor(private http: HttpClient) { }

  getChampionData(): Promise<BaseChampionDTO[]> {
    return this.http
      .get<BaseChampionDTO[]>(
        Constants.CDN_BASE_URL + Constants.CDN_ALL_CHAMP_URL
      )
      .toPromise();
  }

  getChampionDetail(name: string): Promise<ChampionDTO> {
    const params: HttpParamsOptions = {
      fromString: "name=" + name,
    };
    return this.http
      .get<ChampionDTO>(
        Constants.BACKEND_BASE_URL + Constants.BACKEND_CHAMP_URL,
        {
          params: new HttpParams(params)
        }
      )
      .toPromise();
  }
}
