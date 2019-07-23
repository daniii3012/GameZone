import { Component, OnInit } from '@angular/core';
import { GamesServiceService } from '../../services/games-service.service';
import { GameUser } from '../../models/GameUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: any = [];
  
  constructor(private gameService: GamesServiceService) { }

  ngOnInit() {

    this.gameService.getEveryGame().subscribe(
      res => {
        this.games = res;
      },
      err => console.log("ERROR")
    )

  }

}
