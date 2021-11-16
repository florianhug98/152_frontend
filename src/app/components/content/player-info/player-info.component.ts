import { Component, Input, OnInit } from "@angular/core";
import { SummonerDTO } from "../../../dto/summonerDTO";
import { Constants } from "../../../util/constants";

@Component({
  selector: "app-player-info",
  templateUrl: "./player-info.component.html",
  styleUrls: ["./player-info.component.scss"],
})
export class PlayerInfoComponent implements OnInit {
  @Input() summoner: SummonerDTO;
  constructor() {}

  ngOnInit(): void {}

  getProfileIconUrl(): string {
    return (
      Constants.DDRAGON_BASE_URL +
      Constants.DDRAGON_VERSION +
      Constants.DDRAGON_PROFILEICON_URL +
      "/" +
      this.summoner.profileIconId +
      ".png"
    );
  }
}
