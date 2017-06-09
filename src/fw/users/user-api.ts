import { Observable } from 'rxjs/Observable';

export abstract class UserApi {
    signIn : (username:string, password: string, rememeberMe: boolean) => Observable<any>;
    signOut: () => Observable<any>;
    //signOut;
    //chPass
}