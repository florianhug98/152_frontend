import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SummonerService } from "../../../service/summoner.service";
import { SummonerDTO } from "../../../dto/summonerDTO";
import { LeagueEntryDTO } from "../../../dto/leagueEntryDTO";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  summonerForm = new FormGroup({
    summonerName: new FormControl("", [Validators.required]),
  });
  summoner?: SummonerDTO;
  league?: LeagueEntryDTO[];
  dataLoaded: Promise<boolean>;
  error = "";
  firstSearch = false;

  constructor(private summonerService: SummonerService) {}

  ngOnInit(): void {}

  handleEnter(): void {
    if (this.summonerForm.valid) {
      this.search();
    }
  }

  search(): void {
    this.summonerService
      .getSummonerByName(this.summonerForm.get("summonerName")?.value)
      .then((response) => {
        if (response.error === "") {
          this.error = "";
          this.summoner = response.data;
          this.getSummonerInfo();
        } else {
          this.error = response.error;
          this.summoner = undefined;
          this.dataLoaded = Promise.resolve(false);
        }
      })
      .catch((error) => (this.error = error))
      .finally(() => (this.firstSearch = true));
  }

  private getSummonerInfo() {
    this.summonerService
      .getLeagueBySummonerId(this.summoner?.id as string)
      .then((response) => {
        if (response.error === "") {
          this.league = response.data;
          this.dataLoaded = Promise.resolve(true);
        } else {
          this.error = response.error;
        }
      })
      .catch((error) => (this.error = error));
  }
}
