import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople (): Observable<any> {
    let peopleArray = [
      {
        firstName: 'Gustave',
        lastName: 'Eiffel',
        age: 26
      },
      {
        firstName: 'Galápagos',
        lastName: 'Fetus',
        age: 29
      },
      {
        firstName: 'Hércules',
        lastName: 'Olimpio',
        age: 57
      },
      {
        firstName: 'Apolo',
        lastName: 'Notus',
        age: 3
      },
    ]

    return of(peopleArray)
  }
}
