import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
  games =[
    {id:0, name:"name", players:5, isStarted:false},
    {id:1, name:"name2", players:8, isStarted:false}
  ]
  getGame(val){
    let game = this.games[val];
    if(game)
      return game;
    return null;
  }
  get() {
    return this.games;
  }

  add(games) {
    this.games.push(games);
  }

  delete(mediaItem) {
    const index = this.games.indexOf(mediaItem);
    if (index >= 0) {
      this.games.splice(index, 1);
    }
  }
}
