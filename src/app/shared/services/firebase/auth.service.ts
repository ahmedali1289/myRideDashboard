import { Injectable, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  public static logout: Subject<any> = new Subject<any>();
  public userData: any;
  public showLoader: boolean = false;
  constructor(
    public router: Router,
    public ngZone: NgZone,
    ) { 
  }
  ngOnInit(): void { }
  // sign in function
  SignIn(email:any, password:any) {
    console.log(email,password)
    this.router.navigate(['/dashboard/default']);
  }
  get isLoggedIn(): boolean {
    console.log('here1');
    console.log('here');
    
    const user = localStorage.getItem('user');
    return (user != null) ? true : false;
  }

}