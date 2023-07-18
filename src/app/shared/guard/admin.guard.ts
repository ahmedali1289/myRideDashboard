import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/firebase/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(public authService: AuthService,
    public router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  
    let user = localStorage.getItem('user');
    if (!user || user === null) {
      console.log('co');
      
      this.router.navigate(['/auth/login']);
      return true
    }
    else if (user) {
      if (!Object.keys(user).length) {
        this.router.navigate(['/dashboard/default']);
        return true
      }
     
    }
    return true
  }
  
}
