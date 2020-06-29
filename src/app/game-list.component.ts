import {Component, OnInit} from "@angular/core";
import {GameListService} from "./game-list.service";

@Component(
  {
    selector:'game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css']
  })
export class GameListComponent implements OnInit{
  gameList;
  constructor(private gameListService: GameListService) {}

  ngOnInit() {
    this.gameList = this.gameListService.get();
  }

}
