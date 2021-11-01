import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SummonerService } from "../../../service/summoner.service";
import { SummonerDTO } from "../../../dto/summonerDTO";
import { LeagueEntryDTO } from "../../../dto/leagueEntryDTO";
import { MatchDTO } from "../../../dto/matchDTO";
import { SummonerDataDTO } from "../../../dto/summonerDataDTO";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  summonerForm = new FormGroup({
    summonerName: new FormControl("", [Validators.required]),
  });
  summonerData?: SummonerDataDTO;
  dataLoaded: Promise<boolean>;
  errorMessage = "";
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
        if (!response.errorMessage) {
          this.errorMessage = "";
          this.summonerData = response.data;
          this.dataLoaded = Promise.resolve(true);
        } else {
          this.errorMessage = response.errorMessage.errorMessage;
          this.dataLoaded = Promise.resolve(false);
        }
      })
      .catch((error) => {
        this.errorMessage = error.statusText;
        this.dataLoaded = Promise.resolve(false);
      })
      .finally(() => (this.firstSearch = true));
  }
}
