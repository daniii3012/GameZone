import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersService } from './services/users.service';
import { GameComponent} from './pages/game/game.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { GamesLibraryComponent } from './pages/games-library/games-library.component';
import { UserLibraryComponent } from './pages/user-library/user-library.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuickactionbuttonComponent } from './components/quickactionbutton/quickactionbutton.component';

import { MaterializeModule } from "angular2-materialize";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameComponent,
    HomeComponent,
    RegisterComponent,
    GamesLibraryComponent,
    UserLibraryComponent,
    NavbarComponent,
    QuickactionbuttonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTING),
    MaterializeModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
