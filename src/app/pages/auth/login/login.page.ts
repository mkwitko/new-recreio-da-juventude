import { UserClass } from 'src/app/classes/nivel-1/user/user-class';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public userClass: UserClass,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  login()
  {
    this.auth.login(this.userClass.userLoginCredentials);
  }

  forgot()
  {

  }

}
