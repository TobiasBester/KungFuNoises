import { Team } from "../models/team.model";
import { Input } from "@angular/core";

export let TEAMS = {
  BOSTON_UPRISING: new Team('Boston Uprising', 0),
  DALLAS_FUEL: new Team('Dallas Fuel', 0),
  FLORIDA_MAYHEM: new Team('Florida Mayhem', 0),
  HOUSTON_OUTLAWS: new Team('Houston Outlaws', 0),
  LONDON_SPITFIRE: new Team('London Spitfire', 0),
  LOS_ANGELES_GLADIATORS: new Team('Los Angeles Gladiators', 0),
  LOS_ANGELES_VALIANT: new Team('Los Angeles Valiant', 0),
  NEW_YORK_EXCELSIOR: new Team('New York Excelsior', 0),
  PHILADELPHIA_FUSION: new Team('Philadelphia Fusion', 0),
  SAN_FRANCISCO_SHOCK: new Team('San Francisco Shock', 0),
  SEOUL_DYNASTY: new Team('Seoul Dynasty', 0),
  SHANGHAI_DRAGONS: new Team('Shanghai Dragons', 0)
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