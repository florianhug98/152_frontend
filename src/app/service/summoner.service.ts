import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Summoner } from "../dto/summoner";

@Injectable({
  providedIn: "root",
})
export class SummonerService {
  url = "http://localhost:9900/stats/summoner/";
  constructor(private http: HttpClient) {}

  getSummonerByName(summonerName: String): Observable<Summoner> {
    return this.http.get<Summoner>(this.url + summonerName);
  }
}
