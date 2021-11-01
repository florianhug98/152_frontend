import { Component, Input, OnInit } from "@angular/core";
import { LeagueEntryDTO } from "../../../dto/leagueEntryDTO";
import { Constants } from "../../../util/constants";

@Component({
  selector: "app-rank-info",
  templateUrl: "./rank-info.component.html",
  styleUrls: ["./rank-info.component.scss"],
})
export class RankInfoComponent implements OnInit {
  @Input() leagueEntries: LeagueEntryDTO[];
  solo = Constants.SOLO_QUEUE_NAME;
  flex = Constants.FLEX_QUEUE_NAME;
  constructor() {}

  ngOnInit(): void {}

  private hasRank(queueType: string): boolean {
    return (
      this.leagueEntries.filter((entry) => entry.queueType === queueType)
        .length > 0
    );
  }

  getRank(queueType: string): string {
    if (this.hasRank(queueType)) {
      const leagueEntry = this.leagueEntries.filter(
        (entry) => entry.queueType === queueType
      )[0];
      return (
        leagueEntry.tier +
        " " +
        leagueEntry.rank +
        " \n(" +
        leagueEntry.leaguePoints +
        " LP)"
      );
    }
    return "UNRANKED";
  }

  getIconPath(queueType: string): string {
    if (this.hasRank(queueType)) {
      const leagueEntry = this.leagueEntries.filter(
        (entry) => entry.queueType === queueType
      )[0];
      return "assets/" + leagueEntry.tier + ".png";
    }
    return Constants.OPGG_RANK_DEFAULT_ICON_URL;
  }
}
