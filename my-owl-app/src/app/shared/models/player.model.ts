import {Team} from './team.model';
import {Role} from '../enums/role.enum';

export class Player {
    alias: String;
    firstName: String;
    lastName: String;
    homeTown: String;
    team: Team;
    role: Role;
    imageLocation: String;
}
