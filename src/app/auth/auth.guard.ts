import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {
  const url: string = state.url;
  return this.checkLogin(url);
}

checkLogin(url: string): boolean {
  if ( this.userService.getadmin()
  ) {
    return true; }
  // Navigate to the login page with extras
  this.router.navigate(['/signin']);
  return false;
}
}
