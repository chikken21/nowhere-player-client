import { Component, OnInit } from '@angular/core';
import { Player } from 'src/assets/player';
import { GameSessionService } from 'src/services/game-session.service';
import { GameSession } from 'src/assets/GameSession';

@Component({
  selector: 'join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.scss']
})
export class JoinGameComponent implements OnInit {

  constructor(private gameSessionService: GameSessionService) { }

  player: Player = new Player();
  gameCode: string;
  gameSession: GameSession;
  gameSessions: GameSession[];

  ngOnInit() {
    this.getGameSessions();
  }

  setGameCode(gameCode: string) {
    this.gameCode = gameCode;
    console.log("Here it is! " + this.gameCode);
  }

  setPlayerName(playerName: string) {
    this.player.name = playerName;
    console.log("Your name! " + this.player.name);
    console.log(this.gameSessions[0].id);
    console.log(this.gameSessions[1].id);
    console.log(this.gameSessions[2].id);
  }

  getGameSessions = () =>
    this.gameSessionService
    .getGameSession()
    .subscribe(res =>(this.gameSessions = res));

  joinGame(playerName: string, gameCode: string) {
    // console.log("Joining game! " + this.gameCode + " " + this.player.name);
    console.log("Joining game! " + playerName + " " + gameCode);
    this.gameSessions.filter((gameCode) => {
      
    })    
  }

}