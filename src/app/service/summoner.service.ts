import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpParams,
  HttpParamsOptions,
} from "@angular/common/http";
import { Constants } from "../util/constants";
import { ResponseDTO } from "../dto/responseDTO";
import { SummonerDataDTO } from "../dto/summonerDataDTO";

@Injectable({
  providedIn: "root",
})
export class SummonerService {
  constructor(private http: HttpClient) {}

  getSummonerByName(summonerName: String): Promise<ResponseDTO> {
    const params: HttpParamsOptions = {
      fromString: "summonerName=" + summonerName,
    };
    return this.http
      .get<ResponseDTO>(
        Constants.BACKEND_BASE_URL + Constants.BACKEND_SUMMONER_URL,
        {
          params: new HttpParams(params),
        }
      )
      .toPromise();
  }
}
