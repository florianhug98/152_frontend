import {Component, Input, OnInit} from '@angular/core';
import {MatchDTO} from "../../../dto/matchDTO";
import {SummonerDTO} from "../../../dto/summonerDTO";

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss']
})
export class PlayerStatsComponent implements OnInit {
  @Input() matches: MatchDTO[];
  @Input() summoner: SummonerDTO;
  wins = 0;
  losses = 0;
  constructor() { }

  ngOnInit(): void {
    this.countWins();
  }

  private countWins(){
    this.wins = 0;
    this.losses = 0;
    this.matches.forEach(match => {
      match.info.participants
          .filter(participant => participant.summonerId === this.summoner.id)
          .map(participant => {
            if (participant.win){
              this.wins += 1;
            }else {
              this.losses += 1;
            }
          })
    });
  }

  getWinPercentage(): number {
    return (this.wins / (this.wins + this.losses)) * 100;
  }

  getWinLossRatio(): string {
    const winPercentage = this.getWinPercentage();
    const lossPercentage = 100 - winPercentage;
    return lossPercentage + " " + winPercentage;
  }

}
