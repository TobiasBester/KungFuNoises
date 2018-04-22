import { FullHeroResponse } from './../hero-response.interface';
import { HeroResponse } from './../hero-response.interface';
import { HeroListService } from './../hero-list.service';
import { Hero } from './../shared/models/hero.model';
import { HEROES, HEROES_LIST } from './../shared/mock_data/heroes.mock';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from './../shared/enums/role.enum';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  // heroResponse: HeroResponse;
  hero_1 = HEROES.DOOMFIST;
  role_1 = Role[this.hero_1.role];
  hero_2 = HEROES.GENJI;
  role_2 = Role[this.hero_2.role];
  hero_3 = HEROES.HANZO;
  role_3 = Role[this.hero_3.role];
  // hero1 = heroes.;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.http.get('https://owapi.net/api/v3/u/R2D2Soon-1586/heroes').subscribe(data => this.heroResponse = {
    //   // console.log(data);
    //   // console.log('EU: ' + data.eu);
    //   // this.heroResponse = data.eu.
    //   competitive: data['eu']
    // });
    // // console.log(this.heroResponse);
  }

  // showConfig() {
  //   this.heroAPIService.getAPI()
  //     .subscribe(data => this.request = {
  //         _request: data['_request'],
  //         kr: data['kr'],
  //         eu: data['eu'],
  //         us: data['us'],
  //         textfile:  data['textfile']
  //     });
  // }

}
