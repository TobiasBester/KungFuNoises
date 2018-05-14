import { TEAMS } from './../shared/mock_data/teams.mock';
import { HEROES } from './../shared/mock_data/heroes.mock';
import { Team } from './../shared/models/team.model';
import { Role } from './../shared/enums/role.enum';
import { PLAYERS } from './../shared/mock_data/players.mock';
import { Player } from './../shared/models/player.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {
  alias: String;
  private sub: any;

  player: Player;
  role: String;
  hero_1 = HEROES.DOOMFIST;
  role_1 = Role[this.hero_1.role];
  hero_2 = HEROES.GENJI;
  role_2 = Role[this.hero_2.role];
  hero_3 = HEROES.HANZO;
  role_3 = Role[this.hero_3.role];
  team_1 = TEAMS.BOSTON_UPRISING;
  team_2 = TEAMS.FLORIDA_MAYHEM;
  team_3 = TEAMS.LOS_ANGELES_GLADIATORS;
  team_4 = TEAMS.NEW_YORK_EXCELSIOR;
  team_5 = TEAMS.SEOUL_DYNASTY;
  constructor(private route: ActivatedRoute) {
    //this.player = PLAYERS.find(_player => _player.alias === 'Ado');
    //this.role = Role[this.player.role];
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.alias = params['alias']; // (+) converts string 'id' to a number

      this.player = PLAYERS.find(_player => _player.alias === this.alias);
      this.role = Role[this.player.role];
   });
  }

  // 'width' : '200px',
  // 'height' : '80px',
  dynamicStyles() {
    return {
      'background-image' : 'url(' + this.player.team.backgroundLocation + ')',
      'background-size' : 'contain',
      'background-position' : 'centre',
      'color' : 'azure',
      'height' : '300px',
      'margin' : '10px'
    };
  }

}
