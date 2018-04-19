import { Team } from '../models/team.model';
import { Input } from '@angular/core';

// tslint:disable:max-line-length
export let TEAMS = {
  BOSTON_UPRISING: new Team('Boston Uprising', 0, 'bu-theme', '../assets/images/teams/boston_uprising.svg', '../assets/images/team_backgrounds/boston_uprising.jpg'),
  DALLAS_FUEL: new Team('Dallas Fuel', 0, 'df-theme', '../assets/images/teams/dallas_fuel.svg', '../assets/images/team_backgrounds/dallas_fuel.jpg'),
  FLORIDA_MAYHEM: new Team('Florida Mayhem', 0, 'default-theme', '../assets/images/teams/fl_mayhem.svg', '../assets/images/team_backgrounds/fl_mayhem.jpg'),
  HOUSTON_OUTLAWS: new Team('Houston Outlaws', 0, 'ho-theme', '../assets/images/teams/houston_outlaws.svg', '../assets/images/team_backgrounds/houston_outlaws.jpg'),
  LONDON_SPITFIRE: new Team('London Spitfire', 0, 'default-theme', '../assets/images/teams/london_spitfire.svg', '../assets/images/team_backgrounds/london_spitfire.jpg'),
  LOS_ANGELES_GLADIATORS: new Team('Los Angeles Gladiators', 0, 'default-theme', '../assets/images/teams/la_gladiators.svg', '../assets/images/team_backgrounds/la_gladiators.jpg'),
  LOS_ANGELES_VALIANT: new Team('Los Angeles Valiant', 0, 'default-theme', '../assets/images/teams/la_valiant.svg', '../assets/images/team_backgrounds/la_valiant.jpg'),
  NEW_YORK_EXCELSIOR: new Team('New York Excelsior', 0, 'ny-theme', '../assets/images/teams/ny_excelsior.svg', '../assets/images/team_backgrounds/ny_excelsior.jpg'),
  PHILADELPHIA_FUSION: new Team('Philadelphia Fusion', 0, 'pf-theme', '../assets/images/teams/philadelphia_fusion.svg', '../assets/images/team_backgrounds/philly_fusion.jpg'),
  SAN_FRANCISCO_SHOCK: new Team('San Francisco Shock', 0, 'default-theme', '../assets/images/teams/sf_shock.svg', '../assets/images/team_backgrounds/sf_shock.jpg'),
  SEOUL_DYNASTY: new Team('Seoul Dynasty', 0, 'default-theme', '../assets/images/teams/seoul_dynasty.svg', '../assets/images/team_backgrounds/seoul_dynasty.jpg'),
  SHANGHAI_DRAGONS: new Team('Shanghai Dragons', 0, 'sd-theme', '../assets/images/teams/shanghai_dragons.svg', '../assets/images/team_backgrounds/shanghai_dragons.jpg')
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
