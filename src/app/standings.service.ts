import { Injectable } from '@angular/core';


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
@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  private premierLeagueTeams: Team[] = [
    { position: 1,team: "Manchester City",played: 38, won: 28, drawn: 5,lost: 5,gf: 94,ga: 33,gd: 61, points: 89,  },
    { position: 2, team: "Arsenal", played: 38, won: 26, drawn: 6, lost: 6, gf: 88, ga: 43, gd: 45, points: 84 },
    {position: 3, team: "Manchester United", played: 38, won: 23, drawn: 6,lost: 9,gf: 58,ga: 43, gd: 15, points: 75,},
    { position: 4, team: "Newcastle", played: 38, won: 19, drawn: 14, lost: 5, gf: 68, ga: 33, gd: 35, points: 71 },
    { position: 5, team: "Liverpool", played: 38, won: 19, drawn: 10, lost: 9, gf: 75, ga: 47, gd: 28, points: 67 },
    { position: 6, team: "Brighton", played: 38, won: 18, drawn: 8, lost: 12, gf: 72, ga: 53, gd: 19, points: 62 },
    { position: 7, team: "Aston Villa", played: 38, won: 18, drawn: 7, lost: 13, gf: 51, ga: 46, gd: 5, points: 61 },
    { position: 8, team: "Tottenham", played: 38, won: 18, drawn: 6, lost: 14, gf: 70, ga: 63, gd: 7, points: 60 },
    { position: 9, team: "Brentford", played: 38, won: 15, drawn: 14, lost: 9, gf: 58, ga: 46, gd: 12, points: 59 },
    { position: 10, team: "Fulham", played: 38, won: 15, drawn: 7, lost: 16, gf: 55, ga: 53, gd: 2, points: 52 },
  ]



  constructor() {}

  getPremierLeagueStandings(): Team[] {
    return this.premierLeagueTeams
  }

}
