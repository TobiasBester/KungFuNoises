import { Role } from './../enums/role.enum';
import { Hero } from '../models/hero.model';
// tslint:disable:max-line-length
export let HEROES = {
  ANA: new Hero('Ana', Role.SUPPORT, '../assets/images/heroes/Ana_portrait.png', 'https://playoverwatch.com/en-us/heroes/ana/'),
  BASTION: new Hero('Bastion', Role.DEFENCE, '../assets/images/heroes/Bastion_portrait.png', 'https://playoverwatch.com/en-us/heroes/bastion/'),
  BRIGITTE: new Hero('Brigitte', Role.SUPPORT, '../assets/images/heroes/Brigitte_portrait.png', 'https://playoverwatch.com/en-us/heroes/brigitte/'),
  DVA: new Hero('D.VA', Role.TANK, '../assets/images/hereos/D.Va_portrait.png', 'https://playoverwatch.com/en-us/heroes/dva/'),
  DOOMFIST: new Hero('Doomfist', Role.OFFENCE, '../assets/images/heroes/Doomfist_portrait.png', 'https://playoverwatch.com/en-us/heroes/doomfist/'),
  GENJI: new Hero('Genji', Role.OFFENCE, '../assets/images/heroes/Genji_portrait.png', 'https://playoverwatch.com/en-us/heroes/genji/'),
  HANZO: new Hero('Hanzo', Role.DEFENCE, '../assets/images/heroes/Hanzo_portrait.png', 'https://playoverwatch.com/en-us/heroes/Hanzo/'),
  JUNKRAT: new Hero('Junkrat', Role.DEFENCE, '../assets/images/heroes/Junkrat_portrait.png', 'https://playoverwatch.com/en-us/heroes/junkrat/'),
  LUCIO: new Hero('Lucio', Role.SUPPORT, '../assets/images/heroes/Lucio_portrait.png', 'https://playoverwatch.com/en-us/heroes/lucio/'),
  MC_CREE: new Hero('McCree', Role.OFFENCE, '../assets/images/heroes/McCree_portrait.png', 'https://playoverwatch.com/en-us/heroes/mccree/'),
  MEI: new Hero('Mei', Role.DEFENCE, '../assets/images/heroes/Mei_portrait.png', 'https://playoverwatch.com/en-us/heroes/mei/'),
  MERCY: new Hero('Mercy', Role.SUPPORT, '../assets/images/heroes/Mercy_portrait.png', 'https://playoverwatch.com/en-us/heroes/mercy/'),
  MOIRA: new Hero('Moira', Role.SUPPORT, '../assets/images/heroes/Moira_portrait.png', 'https://playoverwatch.com/en-us/heroes/moira/'),
  ORISA: new Hero('Orisa', Role.TANK, '../assets/images/heroes/Orisa_portrait.png', 'https://playoverwatch.com/en-us/heroes/orisa/'),
  PHARAH: new Hero('Pharah', Role.OFFENCE, '../assets/images/heroes/Pharah_portrait.png', 'https://playoverwatch.com/en-us/heroes/pharah/'),
  REAPER: new Hero('Reaper', Role.OFFENCE, '../assets/images/heroes/Reaper_portrait.png', 'https://playoverwatch.com/en-us/heroes/reaper/'),
  REINHARDT: new Hero('Reinhardt', Role.TANK, '../assets/images/heroes/Reinhardt_portrait.png', 'https://playoverwatch.com/en-us/heroes/reinhardt/'),
  ROADHOG: new Hero('Roadhog', Role.TANK, '../assets/images/heroes/Roadhog_portrait.png', 'https://playoverwatch.com/en-us/heroes/roadhog/'),
  SOLDIER76: new Hero('Soldier: 76', Role.OFFENCE, '../assets/images/heroes/Soldier76_portrait.png', 'https://playoverwatch.com/en-us/heroes/soldier-76/'),
  SOMBRA: new Hero('Sombra', Role.OFFENCE, '../assets/images/heroes/Sombra_portrait.png', 'https://playoverwatch.com/en-us/heroes/sombra/'),
  SYMMETRA: new Hero('Symmetra', Role.SUPPORT, '../assets/images/heroes/Symmetra_portrait.png', 'https://playoverwatch.com/en-us/heroes/symmetra/'),
  TORBJORN: new Hero('Torbjörn', Role.DEFENCE, '../assets/images/heroes/Torbjörn_portrait.png', 'https://playoverwatch.com/en-us/heroes/ana/'),
  TRACER: new Hero('Tracer', Role.OFFENCE, '../assets/images/heroes/Tracer_portrait.png', 'https://playoverwatch.com/en-us/heroes/tracer/'),
  WIDOWMAKER: new Hero('Widowmaker', Role.DEFENCE, '../assets/images/heroes/Widowmakera_portrait.png', 'https://playoverwatch.com/en-us/heroes/widowmaker/'),
  WINSTON: new Hero('Winston', Role.TANK, '../assets/images/heroes/Winston_portrait.png', 'https://playoverwatch.com/en-us/heroes/winston/'),
  ZARYA: new Hero('Zarya', Role.TANK, '../assets/images/heroes/Zarya_portrait.png', 'https://playoverwatch.com/en-us/heroes/zarya/'),
  ZENYATTA: new Hero('Zenyatta', Role.SUPPORT, '../assets/images/heroes/Zenyatta_portrait.png', 'https://playoverwatch.com/en-us/heroes/zenyatta/')
};

export const HEROES_LIST: Hero[] = [
  HEROES.ANA,
  HEROES.BASTION,
  HEROES.BRIGITTE,
  HEROES.DOOMFIST,
  HEROES.DVA,
  HEROES.GENJI,
  HEROES.HANZO,
  HEROES.JUNKRAT,
  HEROES.LUCIO,
  HEROES.MC_CREE,
  HEROES.MEI,
  HEROES.MERCY,
  HEROES.MOIRA,
  HEROES.ORISA,
  HEROES.PHARAH,
  HEROES.REAPER,
  HEROES.REINHARDT,
  HEROES.ROADHOG,
  HEROES.SOLDIER76,
  HEROES.SOMBRA,
  HEROES.SYMMETRA,
  HEROES.TORBJORN,
  HEROES.TRACER,
  HEROES.WIDOWMAKER,
  HEROES.WINSTON,
  HEROES.ZARYA,
  HEROES.ZENYATTA
];
