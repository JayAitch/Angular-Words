import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GameListComponent} from "./game-list.component";
import {GameTileComponent} from "./game-tile.component";
import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameTileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
