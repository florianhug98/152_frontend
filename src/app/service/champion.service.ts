import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Constants } from "../util/constants";
import { ChampionDTO } from "../dto/champion/championDTO";

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  constructor(private http: HttpClient) { }

  getChampionData(): Promise<ChampionDTO[]> {
    return this.http
      .get<ChampionDTO[]>(
        Constants.CDN_BASE_URL + Constants.CDN_ALL_CHAMP_URL
      )
      .toPromise();
  }
}
