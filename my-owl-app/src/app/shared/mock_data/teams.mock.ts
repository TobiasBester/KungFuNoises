import { Team } from '../models/team.model';
import { Input } from '@angular/core';

export let TEAMS = {
  BOSTON_UPRISING: new Team('Boston Uprising', 0, 'bu-theme'),
  DALLAS_FUEL: new Team('Dallas Fuel', 0, 'df-theme'),
  FLORIDA_MAYHEM: new Team('Florida Mayhem', 0, 'default-theme'),
  HOUSTON_OUTLAWS: new Team('Houston Outlaws', 0, 'ho-theme'),
  LONDON_SPITFIRE: new Team('London Spitfire', 0, 'default-theme'),
  LOS_ANGELES_GLADIATORS: new Team('Los Angeles Gladiators', 0, 'default-theme'),
  LOS_ANGELES_VALIANT: new Team('Los Angeles Valiant', 0, 'default-theme'),
  NEW_YORK_EXCELSIOR: new Team('New York Excelsior', 0, 'ny-theme'),
  PHILADELPHIA_FUSION: new Team('Philadelphia Fusion', 0, 'pf-theme'),
  SAN_FRANCISCO_SHOCK: new Team('San Francisco Shock', 0, 'default-theme'),
  SEOUL_DYNASTY: new Team('Seoul Dynasty', 0, 'default-theme'),
  SHANGHAI_DRAGONS: new Team('Shanghai Dragons', 0, 'sd-theme')
};

export const TEAMS_LIST: Team[] = [
  TEAMS.BOSTON_UPRISING,
  TEAMS.DALLAS_FUEL,
  TEAMS.FLORIDA_MAYHEM,
  TEAMS.HOUSTON_OUTLAWS,
  TEAMS.LONDON_SPITFIRE,
  TEAMS.LOS_ANGELES_GLADIATORS,
  TEAMS.LOS_ANGELES_VALIANT,
  TEAMS.NEW_YORK_EXCELSIOR,
  TEAMS.PHILADELPHIA_FUSION,
  TEAMS.SAN_FRANCISCO_SHOCK,
  TEAMS.SEOUL_DYNASTY,
  TEAMS.SHANGHAI_DRAGONS
];
