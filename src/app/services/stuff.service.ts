import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stuff } from '../models/stuff';
import { Thing } from '../models/thing';

@Injectable({
  providedIn: 'root'
})
export class StuffService {
  url = 'stuffurl';

  constructor(private http: HttpClient) { }

  deleteStuff(stuff: Stuff): Observable<Stuff> {
    return this.http.delete<Stuff>(`${this.url}/${stuff.id}`);
  }

  getAllStuff(): Observable<Stuff[]> {
    return this.http.get<Stuff[]>(this.url);
  }

  getStuff(id: string): Observable<Stuff> {
    return this.http.get<Stuff>(`${this.url}/${id}`);
  }

  postStuff(stuff: Stuff): Observable<Stuff> {
    return this.http.post<Stuff>(this.url, stuff);
  }

  putStuff(stuff: Stuff): Observable<Stuff> {
    return this.http.put<Stuff>(this.url, stuff);
  }

  hasThings(stuff: Stuff): boolean {
    return stuff.things.length > 0;
  }

  addThing(stuff: Stuff, thing: Thing): Stuff {
    stuff.things.push(thing);
    return stuff;
  }

}
