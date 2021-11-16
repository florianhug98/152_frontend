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
      .then(response => {
        if (response.data) {
          this.champion = response.data.champion;
          this.dataLoaded = Promise.resolve(true);
        }
      });
  }

  getChampionIconUrl(): string {
    return Constants.CDN_BASE_URL + Constants.CDN_CHAMP_ICON_URL + "/" + this.champion.key + ".png";
  }

  getChampionTitle(): string {
    let title = this.champion.title;
    return title.slice(0, 1).toUpperCase() + title.substring(1);
  }

  getPassiveIconUrl(): string {
    return Constants.DDRAGON_BASE_URL + Constants.DDRAGON_VERSION +
      Constants.DDRAGON_PASSIVE_ICON_URL + "/" + this.champion.passive.image.full;
  }

  getSpellIconURL(index: number): string {
    return Constants.DDRAGON_BASE_URL + Constants.DDRAGON_VERSION +
      Constants.DDRAGON_SPELL_ICON_URL + "/" + this.champion.spells[index].image.full;
  }

  getSpellKey(index: number): string {
    switch (index) {
      case 0:
        return "Q";
      case 1:
        return "W";
      case 2:
        return "E";
      default:
        return "R";
    }
  }

  getPassiveTooltip(): string {
    return this.addTooltipDisclaimer(
      this.replaceSpecialChars(
        this.champion.passive.description)
    );
  }

  getSpellTooltip(index: number): string {
    return this.addTooltipDisclaimer(
      this.replaceSpecialChars(
        this.champion.spells[index].tooltip)
    );
  }

  getSkinImageUrl(skinNumber: number): string {
    return Constants.DDRAGON_BASE_URL + Constants.DDRAGON_CHAMP_LOADING_URL
      + "/" + this.champion.name + "_" + skinNumber + ".jpg";
  }

  private replaceSpecialChars(string: string): string {
    return string.replace(/<(.*?)>/g, "")
      .replace(/{{(.*?)}}/g, "? ");
  }

  private addTooltipDisclaimer(string: string): string {
    return string + "\n \n" +
      "'?' - values can't be optained from the Riot API.";
  }
}
