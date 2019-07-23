import { Component, OnInit } from '@angular/core';
import { Router, PRIMARY_OUTLET } from '@angular/router';
import { UrlTree } from '@angular/router';
import { UrlSegment } from '@angular/router';
import { UrlSegmentGroup } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  direction: any;
  show_penguin: boolean = false;
  show_arkanoid: boolean = false;
  show_arkanoid_old: boolean = false;
  show_car_game: boolean = false;
  show_chicken: boolean = false;
  show_snake: boolean = false;

  show_buscaminas: boolean = false;
  show_gallinita: boolean = false;
  show_chicken_road: boolean = false;
  show_pollhor: boolean = false;
  show_pinball: boolean = false;
  show_twicecard: boolean = false;

  show_other: boolean = false;

  constructor(private router: Router) {
    const tree: UrlTree = router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.direction = s[1].path;
    //console.log(this.direction);
  }

  ngOnInit() {
    if (this.direction == 'penguin') {

      //console.log("penguin game");
      this.show_penguin = true;
      this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.js');
      this.loadScript('../assets/games/penguin/sketch.js');
      this.loadScript('../assets/games/penguin/board.js');
      this.loadScript('../assets/games/penguin/defeat.js');
      this.loadScript('../assets/games/penguin/obstacle.js');
      this.loadScript('../assets/games/penguin/penguin.js');

    } else if (this.direction == 'arkanoid') {

      //console.log("arkanoid game");
      this.show_arkanoid = true;
      this.loadScript('../assets/games/arkanoid/Scripts/jquery-1.11.0.min.js');
      this.loadScript('../assets/games/arkanoid/Scripts/ball.js');
      this.loadScript('../assets/games/arkanoid/Scripts/paddle.js');
      this.loadScript('../assets/games/arkanoid/Scripts/brick.js');
      this.loadScript('../assets/games/arkanoid/Scripts/script.js');

    } else if (this.direction == 'arkanoid_old') {

      //console.log("arkanoid_old game");
      this.show_arkanoid_old = true;
      this.loadScript('../assets/games/arkanoid_old/juego_arkanoid.js');

    } /*else if (this.direction == 'car_game') {

      //console.log("car_game game");
      this.show_car_game = true;
      this.loadScript('../assets/games/car_game/script/engine.js');
      this.loadScript('../assets/games/car_game/script/game.js');
      this.loadScript('../assets/games/car_game/script/controls.js');
      this.loadScript('../assets/games/car_game/script/car.js');
      this.loadScript('../assets/games/car_game/script/board.js');
      this.loadScript('../assets/games/car_game/script/board-objects.js');

    }*/ else if (this.direction == 'chicken') {

      //console.log("chicken game");
      this.show_chicken = true;
      this.loadScript('../assets/games/chicken/js/jquery-1.11.0.min.js');
      this.loadScript('../assets/games/chicken/js/calaca.js');
      this.loadScript('../assets/games/chicken/js/quica.js');
      this.loadScript('../assets/games/chicken/js/script.js');

    } else if (this.direction == 'head_game') {

      //console.log("head_game game");
      this.loadScript('../assets/games/head_game/kiwi.js');
      this.loadScript('../assets/games/head_game/headGame.js');

    } else if (this.direction == 'ship_game') {

      //console.log("ship_game game");
      this.loadScript('../assets/games/ship_game/scritpts/kiwi.min.js');
      this.loadScript('../assets/games/ship_game/scritpts/game.js');

    } else if (this.direction == 'snake'){

      //console.log("snake game");
      this.show_snake = true;
      this.loadScript('../assets/games/snake/js/jquery-1.11.0.min.js');
      this.loadScript('../assets/games/snake/js/calaca.js');
      this.loadScript('../assets/games/snake/js/quica.js');
      this.loadScript('../assets/games/snake/js/script.js');

    } else if (this.direction == 'buscaminas'){

      this.show_buscaminas = true;
      this.loadScript('../assets/games/Buscaminas/scripts/controlador.js');
      this.loadScript('../assets/games/Buscaminas/scripts/logica.js');
      this.loadScript('../assets/games/Buscaminas/scripts/main.js');
      this.loadScript('../assets/games/Buscaminas/scripts/tiempo.js');
      //this.loadScript('../assets/games/Buscaminas/scripts/Todo.js');

    } else if (this.direction == 'calavera'){

      this.loadScript('../assets/games/Calavera/js/juego.js');

    } else if (this.direction == 'gallinita'){

      this.show_gallinita = true;
      this.loadScript('../assets/games/Gallinita/js/jquery-1.11.0.min.js');
      this.loadScript('../assets/games/Gallinita/js/carro.js');
      this.loadScript('../assets/games/Gallinita/js/gallina.js');
      this.loadScript('../assets/games/Gallinita/js/maiz.js');
      this.loadScript('../assets/games/Gallinita/js/script.js');

    } else if (this.direction == 'chicken_road'){

      this.show_chicken_road = true;
      this.loadScript('../assets/games/Gallinita1/js/jquery-1.11.0.min.js');
      this.loadScript('../assets/games/Gallinita1/js/autos.js');
      this.loadScript('../assets/games/Gallinita1/js/pollo.js');
      this.loadScript('../assets/games/Gallinita1/js/script.js');

    } else if (this.direction == 'pollhor'){

      this.show_pollhor = true;
      this.loadScript('../assets/games/Gallinita2/js/jquery-1.11.0.min.js');
      this.loadScript('../assets/games/Gallinita2/js/calaca.js');
      this.loadScript('../assets/games/Gallinita2/js/quica.js');
      this.loadScript('../assets/games/Gallinita2/js/script.js');

    } else if (this.direction == 'pinball'){

      this.show_pinball = true;
      this.loadScript('../assets/games/Pinball/logica.js');

    } else if (this.direction == 'twicecard'){

      this.show_twicecard = true;
      this.loadScript('../assets/games/TwiceCard/script.js');

    } else {
      this.show_other = true;
    }
  }

  score(points: number){

  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
