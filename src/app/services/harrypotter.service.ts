import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HarrypotterService {
  urlHarryPotter =
    'http://hp-api.herokuapp.com/api/characters/house/gryffindor';

  constructor(private http: HttpClient) {}

  getHpCharacters(): Observable<any> {
    return this.http.get(this.urlHarryPotter);
  }
}
