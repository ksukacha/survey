// import { Injectable } from '@angular/core';
// import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
// import { Observable } from 'rxjs';
// import {UsersService} from '../users.service';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthAdminGuard implements CanActivate {
//   constructor(private router: Router,
//               private usersService: UsersService) {
//   }
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     if (this.usersService.isAdminLogged()) {
//       return true;
//     } else {
//       this.router.navigate(['login']);
//       return false;
//     }
//   }
// }
