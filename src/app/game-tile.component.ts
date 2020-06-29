import {Router} from "@angular/router";
import {Component, Input} from "@angular/core";
@Component(
  {
    selector:'game-tile',
    templateUrl: './game-tile.component.html',
    styleUrls: ['./game-tile.component.css']
  })
export class GameTileComponent {
  constructor(private router:Router) {

  }

  @Input() game;
  loadGame(val){
    this.router.navigateByUrl('game/' + this.game.id)
    console.log(val);
  }
}
