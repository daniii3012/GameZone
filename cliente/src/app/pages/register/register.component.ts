import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  user: User = {
    nick: '',
    mail: '',
    password: ''
  };

  constructor(private userService: UsersService, private router: Router) {

  }

  ngOnInit() { }

  saveNewUser() {
    this.userService.saveUser(this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['./login']);
      },
      err => console.error(err)
    )
  }


}
