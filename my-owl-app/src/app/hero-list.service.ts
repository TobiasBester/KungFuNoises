import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroListService {
  apiUrl = 'https://owapi.net/api/v3/u/R2D2Soon-1586/heroes';

  constructor(private http: HttpClient) { }

  getAPI() {
    return this.http.get(this.apiUrl);
  }
}
