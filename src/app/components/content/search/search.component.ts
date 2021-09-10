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
  constructor(private summonerService: SummonerService) {}

  ngOnInit(): void {}

  search(): void {}
}
