import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ChampionService } from "../../../../service/champion.service";
import { ChampionDTO } from "../../../../dto/champion/championDTO";
import { Constants } from "../../../../util/constants";

@Component({
  selector: "app-champion-detail",
  templateUrl: "./champion-detail.component.html",
  styleUrls: ["./champion-detail.component.scss"]
})
export class ChampionDetailComponent implements OnInit {
  championName: string;
  champion: ChampionDTO;
  dataLoaded: Promise<boolean>;

  constructor(private route: ActivatedRoute,
              private championService: ChampionService) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("name");
    this.championName = id != null ? id : "";

    this.championService.getChampionDetail(this.championName)
      .then(champ => {
        this.champion = champ;
        this.dataLoaded = Promise.resolve(true);
        console.log(this.champion);
      });
  }

  getChampionIconUrl(): string {
    return Constants.CDN_BASE_URL + Constants.CDN_CHAMP_ICON_URL + "/" + this.championName + ".png";
  }

  getChampionTitle(): string {
    let title = this.champion.title;
    return title.slice(0, 1).toUpperCase() + title.substring(1);
  }
}
