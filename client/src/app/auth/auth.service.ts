import { Injectable } from '@angular/core';

import { Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router }   from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from './../../environments/environment';

@Injectable()
export class AuthService {

  token: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signIn(user: {email: string, passord: string}) {
    
    return this.http
        .post(`${environment.api}/private`, user)
        .map(data => data)
        .subscribe((response: Response) => console.log(response));
        
  }

  signOut() {

  }

}
