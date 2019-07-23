import { Component, OnInit } from '@angular/core';
import { Router, PRIMARY_OUTLET } from '@angular/router';
import { UrlTree } from '@angular/router';
import { UrlSegment } from '@angular/router';
import { UrlSegmentGroup } from '@angular/router';
import { GamesServiceService } from '../../services/games-service.service';

@Component({
  selector: 'app-user-library',
  templateUrl: './user-library.component.html',
  styleUrls: ['./user-library.component.css']
})
export class UserLibraryComponent implements OnInit {

  IDs: any = [];
  direction: any;
  games: any = [];
  gamesIDs: any = [];

  constructor(private router: Router, private gameService: GamesServiceService) {
    const tree: UrlTree = router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.direction = s[1].path;
  }

  ngOnInit() {
    this.gameService.getRegisteredUser(this.direction).subscribe(
      res => {
        this.IDs = res;

        for (let i = 0; i < this.IDs.length; i++) {
          //console.log("i", this.IDs[i].id);
          this.gameService.getGameIDsUser(this.IDs[i].id).subscribe(
            res => {
              this.gamesIDs = res;

              for (let j = 0; j < this.gamesIDs.length; j++) {
                //console.log("j", this.gamesIDs[j].game_id);
                this.gameService.getNameGame(this.gamesIDs[j].game_id).subscribe(
                  res => {
                    this.games.push(res);

                  },
                )
              }

            },
            err => console.log()
          );
        }

      },
      err => console.log("No encontro juegos")
    );
    //console.log(this.games)
  }

  delete_game(gamex: any){
    console.log(this.IDs[0].id);
    console.log(gamex[0].id);

    this.gameService.setDeleteGame(gamex[0].id, this.IDs[0].id).subscribe(
      res => {
        console.log(res);
        //this.router.navigate(['./user-library/', this.IDs[0].nick]);
      },
      err => console.error(err)
    )

    window.location.reload()
  }
  /*
  open_game(game_name) {
    if(game_name){
      this.router.navigate(['./game/', game_name]);
    }
  }
  */
}
