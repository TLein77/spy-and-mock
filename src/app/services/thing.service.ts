import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thing } from '../models/thing';

@Injectable({
  providedIn: 'root'
})
export class ThingService {
  url = 'thingurl';

  constructor(private http: HttpClient) {}

  deleteThing(thing: Thing): Observable<Thing> {
    return this.http.delete<Thing>(`${this.url}/${thing.id}`);
  }

  getAllThing(): Observable<Thing[]> {
    return this.http.get<Thing[]>(this.url);
  }

  getThing(id: string): Observable<Thing> {
    return this.http.get<Thing>(`${this.url}/${id}`);
  }

  postThing(thing: Thing): Observable<Thing> {
    return this.http.post<Thing>(this.url, thing);
  }

  putThing(thing: Thing): Observable<Thing> {
    return this.http.put<Thing>(this.url, thing);
  }

}
