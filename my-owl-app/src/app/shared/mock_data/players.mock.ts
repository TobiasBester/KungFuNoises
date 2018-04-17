import { Player } from "../models/player.model";
import { Role } from "../enums/role.enum";
import { TEAMS } from './teams.mock';

// TO-DO: Complete List
export const PLAYERS: Player[] = [
    { alias: 'Ado'          , firstName: 'Gihyeon'                , lastName: 'Chon'        , homeTown: 'Chungju, KR'           , team: TEAMS.SHANGHAI_DRAGONS        , role: Role.OFFENCE}, 
    { alias: 'Agilities'    , firstName: 'Brady'                  , lastName: 'Girardi'     , homeTown: 'Blairmore, CA'         , team: TEAMS.LOS_ANGELES_VALIANT     , role: Role.OFFENCE},
    { alias: 'AimGod'       , firstName: 'Min-Seok'               , lastName: 'Kwon'        , homeTown: 'Busan, KR'             , team: TEAMS.BOSTON_UPRISING         , role: Role.SUPPORT}, 
    { alias: 'aKm'          , firstName: 'Dylan'                  , lastName: 'Bignet'      , homeTown: 'Angoulême, FR'         , team: TEAMS.DALLAS_FUEL             , role: Role.OFFENCE}, 
    { alias: 'Altering'     , firstName: 'Min-Seok'               , lastName: 'Kwon'        , homeTown: 'Busan, KR'             , team: TEAMS.SHANGHAI_DRAGONS        , role: Role.SUPPORT}, 
    { alias: 'Anamo'        , firstName: 'Tae-Sung'               , lastName: 'Jung'        , homeTown: 'Pohang, KR'            , team: TEAMS.NEW_YORK_EXCELSIOR      , role: Role.SUPPORT}, 
    { alias: 'Architect'    , firstName: 'Minho'                  , lastName: 'Park'        , homeTown: 'Seoul, KR'             , team: TEAMS.SAN_FRANCISCO_SHOCK     , role: Role.OFFENCE}, 
    { alias: 'Arhan'        , firstName: 'WonHyeop'               , lastName: 'Jung'        , homeTown: 'KR'                    , team: TEAMS.HOUSTON_OUTLAWS         , role: Role.FLEX}, 
    { alias: 'Ark'          , firstName: 'Yeon-Jun'               , lastName: 'Hong'        , homeTown: 'Seoul, KR'             , team: TEAMS.NEW_YORK_EXCELSIOR      , role: Role.SUPPORT},
    { alias: 'Asher'        , firstName: 'Jun-Sung'               , lastName: 'Choi'        , homeTown: 'Ulsan, KR'             , team: TEAMS.LOS_ANGELES_GLADIATORS  , role: Role.OFFENCE}, 
    { alias: 'Avast'        , firstName: 'Connor'                 , lastName: 'Prince'      , homeTown: 'Colleyville, TX, US'   , team: TEAMS.BOSTON_UPRISING         , role: Role.SUPPORT}, 
    { alias: 'aWesomeGuy'   , firstName: 'Sung-Hoon'              , lastName: 'Kim'         , homeTown: 'Incheon, KR'           , team: TEAMS.FLORIDA_MAYHEM          , role: Role.TANK}, 
    { alias: 'BABYBAY'      , firstName: 'Andrej'                 , lastName: 'Francisty'   , homeTown: 'Chicago, IL, US'       , team: TEAMS.SAN_FRANCISCO_SHOCK     , role: Role.OFFENCE}, 
    { alias: 'Bani'         , firstName: 'Christopher'            , lastName: 'Benell'      , homeTown: 'Ottawa, CA'            , team: TEAMS.HOUSTON_OUTLAWS         , role: Role.SUPPORT}, 
    { alias: 'Bdosin'       , firstName: 'Seung-Tae'              , lastName: 'Choi'        , homeTown: 'Suwon, KR'             , team: TEAMS.LONDON_SPITFIRE         , role: Role.SUPPORT}, 
    { alias: 'BigGoose'     , firstName: 'Benjamin Ville Aapeli'  , lastName: 'Isohanni'    , homeTown: 'Kokkola, FI'           , team: TEAMS.LOS_ANGELES_GLADIATORS  , role: Role.SUPPORT},
    { alias: 'birdring'     , firstName: 'Ji-Hyeok'               , lastName: 'Kim'         , homeTown: 'Seoul, KR'             , team: TEAMS.LONDON_SPITFIRE         , role: Role.OFFENCE},
    { alias: 'Bischu'       , firstName: 'Aaron'                  , lastName: 'Kim'         , homeTown: 'Seoul, KR'             , team: TEAMS.LOS_ANGELES_GLADIATORS  , role: Role.FLEX}, 
    { alias: 'Boink'        , firstName: 'Daniel'                 , lastName: 'Pence'       , homeTown: 'Gurnee, IL, US'        , team: TEAMS.HOUSTON_OUTLAWS         , role: Role.SUPPORT}, 
    { alias: 'Boombox'      , firstName: 'Isaac'                  , lastName: 'Charles'     , homeTown: 'Boston, GB'            , team: TEAMS.PHILADELPHIA_FUSION     , role: Role.SUPPORT}, 
    { alias: 'Bunny'        , firstName: 'Jun-Hyeok'              , lastName: 'Chae'        , homeTown: 'Suwon, KR'             , team: TEAMS.LOS_ANGELES_VALIANT     , role: Role.OFFENCE}, 
    { alias: 'Carpe'        , firstName: 'Jae-Hyeok'              , lastName: 'Lee'         , homeTown: 'Daejeon, KR'           , team: TEAMS.PHILADELPHIA_FUSION     , role: Role.OFFENCE}, 
    { alias: 'Chipshajen'   , firstName: 'Sebastian'              , lastName: 'Widlund'     , homeTown: 'Götene, SE'            , team: TEAMS.DALLAS_FUEL             , role: Role.SUPPORT}, 
    { alias: 'Clockwork'    , firstName: 'Matthew'                , lastName: 'Dias'        , homeTown: 'Red Bank, NJ, US'      , team: TEAMS.HOUSTON_OUTLAWS         , role: Role.OFFENCE},
    { alias: 'Closer'       , firstName: 'Won-Sik'                , lastName: 'Jung'        , homeTown: 'Seoul, KR'             , team: TEAMS.LONDON_SPITFIRE         , role: Role.SUPPORT} 

  ];