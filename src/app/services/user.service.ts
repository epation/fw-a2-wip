import {Injectable } from '@angular/core';
import { Observable }  from 'rxjs/Rx';
import { UserApi } from '../../fw/users/user-api';
import { Router } from '@angular/router';

@Injectable()
export class UserService implements UserApi {
    isAuthenticated = false;
    constructor(private router: Router){}

    signIn(username: string, password: string, rememeberMe: boolean): Observable<any> {
        this.isAuthenticated = true;
        return Observable.of({username: username}).delay(200);
    }

    signOut(): Observable<any> {
        this.isAuthenticated = false;
        this.router.navigate(['/signin']);
        return Observable.of({});
    }

}