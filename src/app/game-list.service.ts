import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
  games =[
    {name:"name", players:5, isStarted:false},
    {name:"name2", players:8, isStarted:false}
  ]

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
