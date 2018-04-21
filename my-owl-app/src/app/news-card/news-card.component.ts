import { Component, OnInit } from '@angular/core';
import { Team } from './../shared/models/team.model';
import { TEAMS, TEAMS_LIST } from './../shared/mock_data/teams.mock';
import { TeamListComponent } from './../team-list/team-list.component';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  myTeams = TEAMS_LIST;
  team1 = TEAMS_LIST.find(_team1 => _team1.standing === 1);
  team2 = TEAMS_LIST.find(_team1 => _team1.standing === 2);
  team3 = TEAMS_LIST.find(_team1 => _team1.standing === 3);
  team4 = TEAMS_LIST.find(_team1 => _team1.standing === 4);
  team5 = TEAMS_LIST.find(_team1 => _team1.standing === 5);
  team6 = TEAMS_LIST.find(_team1 => _team1.standing === 6);
  team7 = TEAMS_LIST.find(_team1 => _team1.standing === 7);
  team8 = TEAMS_LIST.find(_team1 => _team1.standing === 8);
  team9 = TEAMS_LIST.find(_team1 => _team1.standing === 9);
  team10 = TEAMS_LIST.find(_team1 => _team1.standing === 10);
  team11 = TEAMS_LIST.find(_team1 => _team1.standing === 11);
  team12 = TEAMS_LIST.find(_team1 => _team1.standing === 12);

  constructor() { }

  ngOnInit() {
  }

}
