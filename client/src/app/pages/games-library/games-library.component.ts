import { Component, OnInit } from '@angular/core';
import { Router, PRIMARY_OUTLET } from '@angular/router';
import { UrlTree } from '@angular/router';
import { UrlSegment } from '@angular/router';
import { UrlSegmentGroup } from '@angular/router';
import { GamesServiceService } from '../../services/games-service.service';
import { GameUser } from '../../models/GameUser';

@Component({
  selector: 'app-games-library',
  templateUrl: './games-library.component.html',
  styleUrls: ['./games-library.component.css']
})
export class GamesLibraryComponent implements OnInit {

  IDs: any = [];
  show: boolean = false;
  direction: any;
  games: any = [];
  index: number;

  game: GameUser = {
    user_id: 0,
    game_id: 0,
    max_score: 0,
  }

  constructor(private gameService: GamesServiceService, private router: Router) {
    const tree: UrlTree = router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.direction = s[1].path;
  }

  ngOnInit() {

    if (this.direction != 'any') {
      this.show = true;
    }
    this.gameService.getEveryGame().subscribe(
      res => {
        this.games = res;
      },
      err => console.log("ERROR")
    )



    this.gameService.getRegisteredUser(this.direction).subscribe(
      res => {
        this.IDs = res;
      },
      err => console.log("No encontro juegos")
    )
  }
  /*
  trackByIndex(index: number, obj: any): any {
    console.log(index);
    return index;
  }
  */

  save_game(gamex: any) {

    //console.log(this.IDs[0].id);
    this.game.user_id = this.IDs[0].id;

    //console.log(gamex.id);
    this.game.game_id = gamex.id;

    console.log(this.game);

    this.gameService.getAddGame(this.game).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['./user-library/', this.IDs[0].nick]);
      },
      err => console.error(err)
    )

  }
  /*
  open_game(game_name) {
    if(game_name){
      this.router.navigate(['./game/', game_name]);
    }
  }
  */
}
