import { Component, OnInit } from "@angular/core";
import { ChampionService } from "../../../service/champion.service";
import { ChampionDTO } from "../../../dto/champion/championDTO";
import { Constants } from "../../../util/constants";
import { DataSource } from "@angular/cdk/collections";
import { FormControl } from "@angular/forms";
import { waitForAsync } from "@angular/core/testing";

@Component({
  selector: "app-champions",
  templateUrl: "./champions.component.html",
  styleUrls: ["./champions.component.scss"]
})
export class ChampionsComponent implements OnInit {
  private originalData: ChampionDTO[];
  workingData: ChampionDTO[] = [];
  dataLoaded: Promise<boolean>;
  championName = new FormControl('');
  amountOfChampions: number;

  constructor(private championService: ChampionService) {
  }

  ngOnInit(): void {
    this.championService.getChampionData()
      .then(data => {
        this.originalData = data.slice(1);
        this.originalData.sort((a,b) => (a.name > b.name) ? 1 : -1);
        this.originalData.forEach(val => this.workingData.push(val));
        this.amountOfChampions = this.originalData.length;
        this.dataLoaded = Promise.resolve(true);
      });

    this.championName.valueChanges
      .subscribe(value => {
        this.workingData =
          this.originalData
            .filter(champ => champ.name.toLowerCase().startsWith(value.toLowerCase()));
      });
  }

  getChampionIconUrl(id: number): string {
    return Constants.CDN_BASE_URL + Constants.CDN_CHAMP_ICON_URL + "/" + id + ".png";
  }

  clearChampionName(): void {
    this.championName.reset('');
  }
}
