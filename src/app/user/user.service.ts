import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { IUser, IUserCredentials } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // BehaviorSubject likely is used to cache data over application from server
  private user: BehaviorSubject<IUser | null>;

  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<IUser | null>(null);
  }

  getUser(): Observable<IUser | null> {
    return this.user.asObservable();
  }

  signIn(credentials: IUserCredentials): Observable<IUser> {
    //  to push the user data into a  behavior subject (this.user), to update the user's state across the application.
    // Return the user object back from the map() function so that the caller of signIn() still gets the user as the result of the observable.
    return this.http.post<IUser>('/api/sign-in', credentials).pipe(
      map((user: IUser) => {
        this.user.next(user);
        return user;
      })
    );
  }

  signOut() {
    this.user.next(null);
  }
}
