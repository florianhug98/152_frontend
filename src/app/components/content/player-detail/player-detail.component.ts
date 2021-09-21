import { Component, Input, OnInit } from "@angular/core";
import { Summoner } from "../../../dto/summoner";
import { Constants } from "../../../util/constants";

@Component({
  selector: "app-player-detail",
  templateUrl: "./player-detail.component.html",
  styleUrls: ["./player-detail.component.scss"],
})
export class PlayerDetailComponent implements OnInit {
  @Input() summoner: Summoner;

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
