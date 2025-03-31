import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { State } from './components/state/state';

@Injectable({
  providedIn: 'root'
})
// AuthGuard is a service that implements CanActivate interface to control access to routes
// It checks if the user is authenticated before allowing access to certain routes
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private state: State) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let email;
    this.state.userEmail$.subscribe(value => email = value);
    // Check if the user is authenticated
    if (email) {
      return true;
    }
    // If the user is not authenticated, redirect to the login page
    this.router.navigateByUrl('/');
    return false;
  }
  
};
