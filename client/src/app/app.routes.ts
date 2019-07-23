import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { GamesLibraryComponent } from './pages/games-library/games-library.component';
import { UserLibraryComponent } from './pages/user-library/user-library.component';
import { GameComponent } from './pages/game/game.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  //{ path: 'games-library', component: GamesLibraryComponent },
  { path: 'games-library/:id', component: GamesLibraryComponent },
  { path: 'user-library/:id', component: UserLibraryComponent },
  { path: 'game/:name', component: GameComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = (APP_ROUTES);
