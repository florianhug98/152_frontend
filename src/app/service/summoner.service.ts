import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpParams,
  HttpParamsOptions,
} from "@angular/common/http";
import { Summoner } from "../dto/summoner";
import { BACKEND_BASE_URL, BACKEND_SUMMONER_URL } from "../util/constants";

@Injectable({
  providedIn: "root",
})
export class SummonerService {
  constructor(private http: HttpClient) {}

  getSummonerByName(summonerName: String): Promise<Summoner> {
    const params: HttpParamsOptions = {
      fromString: "summonerName=" + summonerName,
    };
    return this.http
      .get<Summoner>(BACKEND_BASE_URL + BACKEND_SUMMONER_URL, {
        params: new HttpParams(params),
      })
      .toPromise();
  }
}
