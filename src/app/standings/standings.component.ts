import { Component } from '@angular/core';
import { CommonModule } from "@angular/common"
import { StandingsService } from '../standings.service';

 interface Team {
  position: number
  team: string
  played: number
  won: number
  drawn: number
  lost: number
  gf: number
  ga: number
  gd: number
  points: number
}

@Component({
  selector: 'app-standings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standings.component.html',
  styleUrl: './standings.component.css'
})
export class StandingsComponent {

  premierLeagueTeams: Team[] = [];

  constructor(private standingsService: StandingsService) {
    this.premierLeagueTeams = this.standingsService.getPremierLeagueStandings();
  }


}
