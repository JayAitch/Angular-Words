import {Component, OnInit, Input} from "@angular/core";
import {GameListService} from "./game-list.service";
// todo use the service
@Component(
  {
    selector:'live-game',
    templateUrl: './live-game.component.html',
    styleUrls: ['./live-game.component.css']
  })

export class LiveGameComponent implements OnInit{
  game;
  @Input() gameID : number
  constructor(private gameListService: GameListService) {
  }
  ngOnInit() {
    this.game = this.gameListService.getGame(this.gameID);
  }
}
