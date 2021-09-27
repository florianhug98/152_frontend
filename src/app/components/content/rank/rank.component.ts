import { Component, Input, OnInit } from "@angular/core";
import { SummonerDTO } from "../../../dto/summonerDTO";
import { LeagueEntryDTO } from "../../../dto/leagueEntryDTO";

@Component({
  selector: "app-rank",
  templateUrl: "./rank.component.html",
  styleUrls: ["./rank.component.scss"],
})
export class RankComponent implements OnInit {
  @Input() summoner: SummonerDTO;
  @Input() league: LeagueEntryDTO[];
  constructor() {}

  ngOnInit(): void {}
}
