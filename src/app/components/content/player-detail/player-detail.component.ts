import { Component, Input, OnInit } from "@angular/core";
import { SummonerDTO } from "../../../dto/summonerDTO";
import { LeagueEntryDTO } from "../../../dto/leagueEntryDTO";

@Component({
  selector: "app-player-detail",
  templateUrl: "./player-detail.component.html",
  styleUrls: ["./player-detail.component.scss"],
})
export class PlayerDetailComponent implements OnInit {
  @Input() summoner: SummonerDTO;
  @Input() league: LeagueEntryDTO[];

  constructor() {}

  ngOnInit(): void {}
}
