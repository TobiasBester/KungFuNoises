import { HEROES } from './../shared/mock_data/heroes.mock';
import { HeroListService } from './../hero-list.service';
import { Hero } from './../shared/models/hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor(public heroAPIService: HeroListService, public request) { }

  ngOnInit() {
  }

  showConfig() {
    this.heroAPIService.getAPI()
      .subscribe(data => this.request = {
          _request: data['_request'],
          kr: data['kr'],
          eu: data['eu'],
          us: data['us'],
          textfile:  data['textfile']
      });
  }

}
