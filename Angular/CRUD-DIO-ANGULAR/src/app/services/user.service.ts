import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://sheet.best/api/sheets/3f6b8b42-ad0e-4a1a-983a-72ca984d8748'

  constructor(private httpClient: HttpClient) { }

  //retorna a lista de users
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl)
  }
}
