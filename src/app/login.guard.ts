import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    //注入router 元件服務可設定轉址 、取得完成資訊

    private router: Router) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (next.queryParams['apikey'] == '123') {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }


  }
}
