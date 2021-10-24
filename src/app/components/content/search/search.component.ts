import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SummonerService } from "../../../service/summoner.service";
import { SummonerDTO } from "../../../dto/summonerDTO";
import { LeagueEntryDTO } from "../../../dto/leagueEntryDTO";
import {ErrorMessageDTO} from "../../../dto/errorMessageDTO";
import {MatchDTO} from "../../../dto/matchDTO";

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
  matches?: MatchDTO[];
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
          this.summoner = response.data;
          this.getSummonerInfo();
        } else {
          this.errorMessage = response.errorMessage.errorMessage
          this.dataLoaded = Promise.resolve(false);
        }
      })
        .catch(error => {
            this.errorMessage = error.statusText;
            this.dataLoaded = Promise.resolve(false);
        })
        .finally(() => (this.firstSearch = true));
  }

  private getSummonerInfo() {
    this.summonerService
      .getLeagueBySummonerId(this.summoner?.id as string)
      .then((response) => {
        if (!response.errorMessage) {
          this.league = response.data;
        } else {
          this.errorMessage = response.errorMessage.errorMessage;
        }
      })
        .catch(error => {
            this.errorMessage = error.statusText;
            this.dataLoaded = Promise.resolve(false);
        })

    this.summonerService
        .getGamesByPuuid(this.summoner?.puuid as string)
        .then(response => {
          if (!response.errorMessage){
            this.matches = response.data;
            this.dataLoaded = Promise.resolve(true);
          }else {
            this.errorMessage = response.errorMessage.errorMessage;
          }
        })
        .catch(error => {
            this.errorMessage = error.statusText;
            this.dataLoaded = Promise.resolve(false);
        })
  }
}
