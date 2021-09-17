import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { SummonerService } from "../../../service/summoner.service";
import { Summoner } from "../../../dto/summoner";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  summonerName = new FormControl("");
  summoner?: Summoner;
  error = "";
  firstSearch = false;
  constructor(private summonerService: SummonerService) {}

  ngOnInit(): void {}

  search(): void {
    this.summonerService
      .getSummonerByName(this.summonerName.value)
      .then((summoner) => {
        if (summoner !== null) {
          this.error = "";
          this.summoner = summoner;
        } else {
          this.summoner = undefined;
          this.error = "Summoner not found";
        }
      })
      .catch((error) => (this.error = error))
      .finally(() => (this.firstSearch = true));
  }
}
