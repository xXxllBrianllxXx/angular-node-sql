import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserModel } from '../models/user';

@Injectable({
	providedIn: 'root'
})

export class UserService {

	URL: string = 'http://localhost:3000/'

	constructor(private http: HttpClient) { }

	getUsers(): Observable<any> {
		return this.http.get<UserModel[]>(this.URL + 'user/get').pipe(map(res => res));
	}

	saveUser(user: UserModel): Observable<any> {
		return this.http.post<any>(this.URL + 'user/add', user).pipe(map(res => res));
	}

	updateUser(user: UserModel): Observable<any> {
		return this.http.put<any>(this.URL + 'user/update', user).pipe(map(res => res));
	}

	deleteUser(id: number): Observable<any> {
		return this.http.delete<any>(this.URL + 'user/delete/' + id).pipe(map(res => res));
	}
}
