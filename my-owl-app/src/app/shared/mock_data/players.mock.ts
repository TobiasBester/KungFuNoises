import { Player } from '../models/player.model';
import { Role } from '../enums/role.enum';
import { TEAMS } from './teams.mock';

// TO-DO: Complete List
// tslint:disable:max-line-length
export const PLAYERS: Player[] = [
  { alias: 'Ado', firstName: 'Gihyeon', lastName: 'Chon', homeTown: 'Chungju, KR', team: TEAMS.SHANGHAI_DRAGONS, role: Role.OFFENCE, imageLocation: '../assets/images/players/ado.png' },
  { alias: 'Agilities', firstName: 'Brady', lastName: 'Girardi', homeTown: 'Blairmore, CA', team: TEAMS.LOS_ANGELES_VALIANT, role: Role.OFFENCE, imageLocation: '../assets/images/players/agilities.png' },
  { alias: 'AimGod', firstName: 'Min-Seok', lastName: 'Kwon', homeTown: 'Busan, KR', team: TEAMS.BOSTON_UPRISING, role: Role.SUPPORT, imageLocation: '../assets/images/players/aimgod.png' },
  { alias: 'aKm', firstName: 'Dylan', lastName: 'Bignet', homeTown: 'Angoulême, FR', team: TEAMS.DALLAS_FUEL, role: Role.OFFENCE, imageLocation: '../assets/images/players/akm.png' },
  { alias: 'Altering', firstName: 'Min-Seok', lastName: 'Kwon', homeTown: 'Busan, KR', team: TEAMS.SHANGHAI_DRAGONS, role: Role.SUPPORT, imageLocation: '../assets/images/players/altering.png' },
  { alias: 'Anamo', firstName: 'Tae-Sung', lastName: 'Jung', homeTown: 'Pohang, KR', team: TEAMS.NEW_YORK_EXCELSIOR, role: Role.SUPPORT, imageLocation: '../assets/images/players/anamo.png' },
  { alias: 'Architect', firstName: 'Minho', lastName: 'Park', homeTown: 'Seoul, KR', team: TEAMS.SAN_FRANCISCO_SHOCK, role: Role.OFFENCE, imageLocation: '../assets/images/players/aimgod.png'  },
  { alias: 'Arhan', firstName: 'WonHyeop', lastName: 'Jung', homeTown: 'KR', team: TEAMS.HOUSTON_OUTLAWS, role: Role.FLEX, imageLocation: '../assets/images/players/aimgod.png'  },
  { alias: 'Ark', firstName: 'Yeon-Jun', lastName: 'Hong', homeTown: 'Seoul, KR', team: TEAMS.NEW_YORK_EXCELSIOR, role: Role.SUPPORT, imageLocation: '../assets/images/players/ark.png'  },
  { alias: 'Asher', firstName: 'Jun-Sung', lastName: 'Choi', homeTown: 'Ulsan, KR', team: TEAMS.LOS_ANGELES_GLADIATORS, role: Role.OFFENCE, imageLocation: '../assets/images/players/asher.png'  },
  { alias: 'Avast', firstName: 'Connor', lastName: 'Prince', homeTown: 'Colleyville, TX, US', team: TEAMS.BOSTON_UPRISING, role: Role.SUPPORT, imageLocation: '../assets/images/players/avast.png'  },
  { alias: 'aWesomeGuy', firstName: 'Sung-Hoon', lastName: 'Kim', homeTown: 'Incheon, KR', team: TEAMS.FLORIDA_MAYHEM, role: Role.TANK, imageLocation: '../assets/images/players/awesomeguy.png'  },
  { alias: 'BABYBAY', firstName: 'Andrej', lastName: 'Francisty', homeTown: 'Chicago, IL, US', team: TEAMS.SAN_FRANCISCO_SHOCK, role: Role.OFFENCE, imageLocation: '../assets/images/players/babybay.png'  },
  { alias: 'Bani', firstName: 'Christopher', lastName: 'Benell', homeTown: 'Ottawa, CA', team: TEAMS.HOUSTON_OUTLAWS, role: Role.SUPPORT, imageLocation: '../assets/images/players/bani.png'  },
  { alias: 'Bdosin', firstName: 'Seung-Tae', lastName: 'Choi', homeTown: 'Suwon, KR', team: TEAMS.LONDON_SPITFIRE, role: Role.SUPPORT, imageLocation: '../assets/images/players/bdosin.png'  },
  { alias: 'BigGoose', firstName: 'Benjamin Ville Aapeli', lastName: 'Isohanni', homeTown: 'Kokkola, FI', team: TEAMS.LOS_ANGELES_GLADIATORS, role: Role.SUPPORT, imageLocation: '../assets/images/players/biggoose.png'  },
  { alias: 'birdring', firstName: 'Ji-Hyeok', lastName: 'Kim', homeTown: 'Seoul, KR', team: TEAMS.LONDON_SPITFIRE, role: Role.OFFENCE, imageLocation: '../assets/images/players/birdring.png'  },
  { alias: 'Bischu', firstName: 'Aaron', lastName: 'Kim', homeTown: 'Seoul, KR', team: TEAMS.LOS_ANGELES_GLADIATORS, role: Role.FLEX, imageLocation: '../assets/images/players/bischu.png'  },
  { alias: 'Boink', firstName: 'Daniel', lastName: 'Pence', homeTown: 'Gurnee, IL, US', team: TEAMS.HOUSTON_OUTLAWS, role: Role.SUPPORT, imageLocation: '../assets/images/players/boink.png'  },
  { alias: 'Boombox', firstName: 'Isaac', lastName: 'Charles', homeTown: 'Boston, GB', team: TEAMS.PHILADELPHIA_FUSION, role: Role.SUPPORT, imageLocation: '../assets/images/players/boombox.png'  },
  { alias: 'Bunny', firstName: 'Jun-Hyeok', lastName: 'Chae', homeTown: 'Suwon, KR', team: TEAMS.LOS_ANGELES_VALIANT, role: Role.OFFENCE, imageLocation: '../assets/images/players/bunny.png'  },
  { alias: 'Carpe', firstName: 'Jae-Hyeok', lastName: 'Lee', homeTown: 'Daejeon, KR', team: TEAMS.PHILADELPHIA_FUSION, role: Role.OFFENCE, imageLocation: '../assets/images/players/carpe.png'  },
  { alias: 'Chipshajen', firstName: 'Sebastian', lastName: 'Widlund', homeTown: 'Götene, SE', team: TEAMS.DALLAS_FUEL, role: Role.SUPPORT, imageLocation: '../assets/images/players/chipshajen.png'  },
  { alias: 'Clockwork', firstName: 'Matthew', lastName: 'Dias', homeTown: 'Red Bank, NJ, US', team: TEAMS.HOUSTON_OUTLAWS, role: Role.OFFENCE, imageLocation: '../assets/images/players/clockwork.png'  },
  { alias: 'Closer', firstName: 'Won-Sik', lastName: 'Jung', homeTown: 'Seoul, KR', team: TEAMS.LONDON_SPITFIRE, role: Role.SUPPORT, imageLocation: '../assets/images/players/closer.png'  },

  { alias: 'cocco', firstName: 'Christian', lastName: 'Jonsson', homeTown: 'Härnösand, SE', team: TEAMS.DALLAS_FUEL, role: Role.TANK, imageLocation: '../assets/images/players/cocco.png'  },
  { alias: 'Coolmatt', firstName: 'Matt', lastName: 'Iorio', homeTown: 'Laporte, IN, US', team: TEAMS.HOUSTON_OUTLAWS, role: Role.TANK, imageLocation: '../assets/images/players/coolmatt.png'  },
  { alias: 'Custa', firstName: 'Scott', lastName: 'Kennedy', homeTown: 'Adelaide, AU', team: TEAMS.HOUSTON_OUTLAWS, role: Role.OFFENCE, imageLocation: '../assets/images/players/custa.png'  },
  { alias: 'CWoosH', firstName: 'Johan', lastName: 'Klingestedt', homeTown: 'Fagersta, SE', team: TEAMS.FLORIDA_MAYHEM, role: Role.FLEX, imageLocation: '../assets/images/players/cwoosh.png'  },
  { alias: 'Daemin', firstName: 'Daemin', lastName: 'Kim', homeTown: 'KR', team: TEAMS.SHANGHAI_DRAGONS, role: Role.OFFENCE, imageLocation: '../assets/images/players/daemin.png'  },
  { alias: 'Danteh', firstName: 'Dante', lastName: 'Cruz', homeTown: 'Chicago, IL, US', team: TEAMS.HOUSTON_OUTLAWS, role: Role.OFFENCE, imageLocation: '../assets/images/players/danteh.png'  },
  { alias: 'DayFly', firstName: 'Jeong-Hwan', lastName: 'Park', homeTown: 'Mungyeong, KR', team: TEAMS.PHILADELPHIA_FUSION, role: Role.SUPPORT, imageLocation: '../assets/images/players/dayfly.png'  },
  { alias: 'dhaK', firstName: 'Daniel', lastName: 'Martinez Paz', homeTown: 'Gijón, ES', team: TEAMS.SAN_FRANCISCO_SHOCK, role: Role.SUPPORT, imageLocation: '../assets/images/players/dhak.png'  },
  { alias: 'Diya', firstName: 'Weida', lastName: 'Lu', homeTown: 'Liaoning, CN', team: TEAMS.SHANGHAI_DRAGONS, role: Role.OFFENCE, imageLocation: '../assets/images/players/diya.png'  },
  { alias: 'EFFECT', firstName: 'Hyeon', lastName: 'Hwang', homeTown: 'Busan, KR', team: TEAMS.DALLAS_FUEL, role: Role.OFFENCE, imageLocation: '../assets/images/players/effect.png'  },
  { alias: 'Eqo', firstName: 'Josue', lastName: 'Corona', homeTown: 'Netenya, IL', team: TEAMS.PHILADELPHIA_FUSION, role: Role.OFFENCE, imageLocation: '../assets/images/players/eqo.png'  },
  { alias: 'Fate', firstName: 'Pan-Seung', lastName: 'Koo', homeTown: 'Seoul, KR', team: TEAMS.LOS_ANGELES_VALIANT, role: Role.TANK, imageLocation: '../assets/images/players/fate.png'  },
  { alias: 'FCTFCTN', firstName: 'Russell', lastName: 'Campbell', homeTown: 'Midland, MI, US', team: TEAMS.HOUSTON_OUTLAWS, role: Role.TANK, imageLocation: '../assets/images/players/fctfctn.png'  },
  { alias: 'Fearless', firstName: 'Eui-Seok', lastName: 'Lee', homeTown: 'Seoul, KR', team: TEAMS.SHANGHAI_DRAGONS, role: Role.TANK, imageLocation: '../assets/images/players/fearless.png'  },
  { alias: 'Finnsi', firstName: 'Finnbjorn', lastName: 'Jonasson', homeTown: 'Reykjavík, IS', team: TEAMS.LOS_ANGELES_VALIANT, role: Role.FLEX, imageLocation: '../assets/images/players/aimgod.png'  },
  { alias: 'Fissure', firstName: 'Chan-Hyung', lastName: 'Baek', homeTown: 'Hwaseong, KR', team: TEAMS.LOS_ANGELES_GLADIATORS, role: Role.TANK, imageLocation: '../assets/images/players/fissure.png'  },
  { alias: 'Fiveking', firstName: 'Zhaoyu', lastName: 'Chen', homeTown: 'Hunan, CN', team: TEAMS.SHANGHAI_DRAGONS, role: Role.SUPPORT, imageLocation: '../assets/images/players/fiveking.png'  },
  { alias: 'FLETA', firstName: 'Byung-Sun', lastName: 'Kim', homeTown: 'Namyangju, KR', team: TEAMS.SEOUL_DYNASTY, role: Role.OFFENCE, imageLocation: '../assets/images/players/fleta.png'  },
  { alias: 'fragi', firstName: 'Joona', lastName: 'Laine', homeTown: 'Turku, FI', team: TEAMS.PHILADELPHIA_FUSION, role: Role.TANK, imageLocation: '../assets/images/players/fragi.png'  },
  { alias: 'Freefeel', firstName: 'Peixuan', lastName: 'Xu', homeTown: 'Henan, CN', team: TEAMS.SHANGHAI_DRAGONS, role: Role.SUPPORT, imageLocation: '../assets/images/players/freefeel.png'  },
  { alias: 'Fury', firstName: 'Jun-Ho', lastName: 'Kim', homeTown: 'Seoul, KR', team: TEAMS.LONDON_SPITFIRE, role: Role.FLEX, imageLocation: '../assets/images/players/fury.png'  },
  { alias: 'Gambler', firstName: 'Jin-Woo', lastName: 'Heo', homeTown: 'Seoul, KR', team: TEAMS.SEOUL_DYNASTY, role: Role.SUPPORT, imageLocation: '../assets/images/players/gambler.png'  },
  { alias: 'Gamsu', firstName: 'YoungJin', lastName: 'Noh', homeTown: 'Gyeongju, KR', team: TEAMS.BOSTON_UPRISING, role: Role.TANK, imageLocation: '../assets/images/players/gamsu.png'  },
  { alias: 'Geguri', firstName: 'Seyeon', lastName: 'Kim', homeTown: 'Daejeon, KR', team: TEAMS.SHANGHAI_DRAGONS, role: Role.TANK, imageLocation: '../assets/images/players/geguri.png'  },
  { alias: 'Gesture', firstName: 'Jae-Hui', lastName: 'Hong', homeTown: 'Gunsan, KR', team: TEAMS.LONDON_SPITFIRE, role: Role.TANK, imageLocation: '../assets/images/players/gesture.png'  },

  { alias: 'gido', firstName: '	Gi-Do', lastName: 'Moon', homeTown: 'Incheon, KR', team: TEAMS.SEOUL_DYNASTY, role: Role.FLEX, imageLocation: '../assets/images/players/gido.png'  },
  { alias: 'HaGoPeun', firstName: 'Hyeon-Woo', lastName: 'Jo', homeTown: 'Jinhae, KR', team: TEAMS.LONDON_SPITFIRE, role: Role.SUPPORT, imageLocation: '../assets/images/players/hagopeun.png'  },
  { alias: 'HarryHook', firstName: 'Jonathan', lastName: 'Tejedor Rua', homeTown: 'Asturias, ES', team: TEAMS.DALLAS_FUEL, role: Role.SUPPORT, imageLocation: '../assets/images/players/harryhook.png'  },
  { alias: 'Hooreg', firstName: 'Dong-Eun', lastName: 'Lee', homeTown: 'Busan, KR', team: TEAMS.LONDON_SPITFIRE, role: Role.OFFENCE, imageLocation: '../assets/images/players/hooreg.png'  },
  { alias: 'Hotba', firstName: 'Hong-Jun', lastName: 'Choi', homeTown: 'Seoul, KR', team: TEAMS.PHILADELPHIA_FUSION, role: Role.FLEX, imageLocation: '../assets/images/players/hotba.png'  },
  { alias: 'Hydration', firstName: 'Joao Pedro', lastName: 'Veloso de Goes Telles', homeTown: 'Monte Claros, BR', team: TEAMS.LOS_ANGELES_GLADIATORS, role: Role.OFFENCE, imageLocation: '../assets/images/players/hydration.png'  },
  { alias: 'iddqd', firstName: 'André', lastName: 'Dahlström', homeTown: 'Stockholm, SE', team: TEAMS.SAN_FRANCISCO_SHOCK, role: Role.OFFENCE, imageLocation: '../assets/images/players/iddqd.png'  },
  { alias: 'iRemiix', firstName: 'Luis', lastName: 'Galarza Figueroa', homeTown: 'Barceloneta, PR', team: TEAMS.LOS_ANGELES_GLADIATORS, role: Role.TANK, imageLocation: '../assets/images/players/iremiix.png'  },
  { alias: 'Izayaki', firstName: 'Minchul', lastName: 'Kim', homeTown: 'Seoul, KR', team: TEAMS.LOS_ANGELES_VALIANT, role: Role.FLEX, imageLocation: '../assets/images/players/aimgod.png'  },
  { alias: 'Jake', firstName: 'Jake', lastName: 'Lyon', homeTown: 'San Diego, CA, US', team: TEAMS.HOUSTON_OUTLAWS, role: Role.OFFENCE, imageLocation: '../assets/images/players/jake.png'  },
  { alias: 'Janus', firstName: 'Jun-Hwa', lastName: 'Song', homeTown: 'Seoul, KR', team: TEAMS.NEW_YORK_EXCELSIOR, role: Role.TANK, imageLocation: '../assets/images/players/janus.png'  },
  { alias: 'Jjonak', firstName: 'Seong-Hyun', lastName: 'Bang', homeTown: 'Osan, KR', team: TEAMS.NEW_YORK_EXCELSIOR, role: Role.SUPPORT, imageLocation: '../assets/images/players/jjonak.png'  },
  { alias: 'Joemeister', firstName: 'Joseph', lastName: 'Gramano', homeTown: 'Toronto, CA', team: TEAMS.PHILADELPHIA_FUSION, role: Role.SUPPORT, imageLocation: '../assets/images/players/joemeister.png'  },
  { alias: 'Kalios', firstName: 'WooYul', lastName: 'Shin', homeTown: 'Dangjin City, KR', team: TEAMS.BOSTON_UPRISING, role: Role.TANK, imageLocation: '../assets/images/players/kalios.png'  },
  { alias: 'Kariv', firstName: 'Young-Seo', lastName: 'Park', homeTown: 'Seoul, KR', team: TEAMS.LOS_ANGELES_VALIANT, role: Role.SUPPORT, imageLocation: '../assets/images/players/kariv.png'  },
  { alias: 'Kellex', firstName: 'Kristian', lastName: 'Keller', homeTown: 'Roskilde, DK', team: TEAMS.BOSTON_UPRISING, role: Role.SUPPORT, imageLocation: '../assets/images/players/kellex.png'  },
  { alias: 'KSF', firstName: 'Kyle', lastName: 'Frandanisa', homeTown: 'Puyallup, WA, US', team: TEAMS.LOS_ANGELES_VALIANT, role: Role.OFFENCE, imageLocation: '../assets/images/players/aimgod.png'  },
  { alias: 'KuKi', firstName: 'Dae-Kuk', lastName: 'Kim', homeTown: 'Seongnam, KR', team: TEAMS.SEOUL_DYNASTY, role: Role.TANK, imageLocation: '../assets/images/players/kuki.png'  },
  { alias: 'Libero', firstName: 'Hae-Seong', lastName: 'Kim', homeTown: 'Anyang, KR', team: TEAMS.NEW_YORK_EXCELSIOR, role: Role.OFFENCE, imageLocation: '../assets/images/players/libero.png'  },
  { alias: 'LiNkzr', firstName: 'Jiri', lastName: 'Masalin', homeTown: 'Turku, FI', team: TEAMS.HOUSTON_OUTLAWS, role: Role.OFFENCE, imageLocation: '../assets/images/players/linkzr.png'  },
  { alias: 'Logix', firstName: 'Andreas', lastName: 'Berghmans', homeTown: 'Duffel, BE', team: TEAMS.FLORIDA_MAYHEM, role: Role.OFFENCE, imageLocation: '../assets/images/players/logix.png'  },
  { alias: 'Manneten', firstName: 'Tim', lastName: 'Bylund', homeTown: 'Karlstad, SE', team: TEAMS.FLORIDA_MAYHEM, role: Role.FLEX, imageLocation: '../assets/images/players/manneten.png'  },
  { alias: 'Mano', firstName: 'Dong-Gyu', lastName: 'Kim', homeTown: 'Busan, KR', team: TEAMS.NEW_YORK_EXCELSIOR, role: Role.TANK, imageLocation: '../assets/images/players/mano.png'  },
  { alias: 'Meko', firstName: 'Tae-Hong', lastName: 'Kim', homeTown: 'Busan, KR', team: TEAMS.NEW_YORK_EXCELSIOR, role: Role.TANK, imageLocation: '../assets/images/players/meko.png'  },
  { alias: 'Mendokusaii', firstName: 'Lucas', lastName: 'Håkansson', homeTown: 'Spånga, SE', team: TEAMS.HOUSTON_OUTLAWS, role: Role.OFFENCE, imageLocation: '../assets/images/players/mendokusaii.png'  }

  ];
