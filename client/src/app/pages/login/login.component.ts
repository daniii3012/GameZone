import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    nick: '',
    mail: '',
    password: ''
  };

  userR: any;

  constructor(private userService: UsersService, private router: Router) {

  }

  ngOnInit() { }

  checkRegister() {
    this.userService.checkUser(this.user.nick, this.user.password).subscribe(
      res => {
        this.userR = res;
        if (this.userR.length == 0) {
          console.log("Match Error")
        }
        else {
          this.router.navigate(['./user-library/', this.user.nick]);
        }
      },
      err => console.error(err)
    )
  }

}
