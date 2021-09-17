import { Component, Input, OnInit } from "@angular/core";
import { Summoner } from "../../../dto/summoner";

@Component({
  selector: "app-player-detail",
  templateUrl: "./player-detail.component.html",
  styleUrls: ["./player-detail.component.scss"],
})
export class PlayerDetailComponent implements OnInit {
  @Input() summoner: Summoner;
  constructor() {}

  ngOnInit(): void {}
}
