import { Routes, RouterModule } from '@angular/router';
import {LiveGameComponent} from "./live-game.component";
import {GameListComponent} from "./game-list.component";


const appRoutes: Routes = [
  { path: 'game/:id', component: LiveGameComponent },
  { path:'games', component:GameListComponent},
  { path:'', redirectTo:'games', pathMatch: 'full'}
];
export const routing = RouterModule.forRoot(appRoutes);

