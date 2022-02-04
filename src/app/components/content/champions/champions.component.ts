import { Component, OnInit } from "@angular/core";
import { ChampionService } from "../../../service/champion.service";
import { BaseChampionDTO } from "../../../dto/champion/baseChampionDTO";
import { Constants } from "../../../util/constants";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-champions",
  templateUrl: "./champions.component.html",
  styleUrls: ["./champions.component.scss"],
})
export class ChampionsComponent implements OnInit {
  private originalData: BaseChampionDTO[];
  workingData: BaseChampionDTO[] = [];
  dataLoaded: Promise<boolean>;
  championName = new FormControl("");
  amountOfChampions: number;

  constructor(private championService: ChampionService) {}

  ngOnInit(): void {
    this.championService.getChampionData().then((data) => {
      this.originalData = data.slice(1);
      this.originalData.sort((a, b) => (a.name > b.name ? 1 : -1));
      this.originalData.forEach((val) => this.workingData.push(val));
      this.amountOfChampions = this.originalData.length;
      this.dataLoaded = Promise.resolve(true);
    });

    this.championName.valueChanges.subscribe((value) => {
      this.workingData = this.originalData.filter((champ) =>
        champ.name.toLowerCase().startsWith(value.toLowerCase())
      );
    });
  }

  getChampionIconUrl(id: number): string {
    return (
      Constants.CDN_BASE_URL + Constants.CDN_CHAMP_ICON_URL + "/" + id + ".png"
    );
  }

  clearChampionName(): void {
    this.championName.reset("");
  }
}
