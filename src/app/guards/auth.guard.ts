import { UserClass } from 'src/app/classes/user/user-class';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private navigation: NavigationService,
    private userClass: UserClass) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      this.userClass.getAuth()
      .then(loginToken => {
        if(!loginToken)
        {
          this.navigation.goTo('login');
        }
        resolve(loginToken ? true : false);
      });
    });
  }

}
