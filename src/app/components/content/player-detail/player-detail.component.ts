import { Component, Input, OnInit } from "@angular/core";
import { SummonerDTO } from "../../../dto/summonerDTO";
import { Constants } from "../../../util/constants";
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

  getProfileIconUrl(): string {
    return (
      Constants.CDN_BASE_URL +
      Constants.CDN_VERSION +
      Constants.CDN_PROFILE_ICON_URL +
      "/" +
      this.summoner.profileIconId +
      ".png"
    );
  }
}
