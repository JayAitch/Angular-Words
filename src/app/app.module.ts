import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GameListComponent} from "./game-list.component";
import {GameTileComponent} from "./game-tile.component";
import {AppComponent} from './app.component';
import {LiveGameComponent} from "./live-game.component";
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameTileComponent,
    LiveGameComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
