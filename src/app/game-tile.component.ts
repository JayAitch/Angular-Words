import {Component, Input} from "@angular/core";
@Component(
  {
    selector:'game-tile',
    templateUrl: './game-tile.component.html',
    styleUrls: ['./game-tile.component.css']
  })
export class GameTileComponent {
  @Input() game;
}
