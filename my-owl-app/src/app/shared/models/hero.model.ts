import { Role } from '../enums/role.enum';

export class Hero {
  constructor(
    public name: String,
    public role: Role,
    public imageLocation: String,
    public officialLink: String) { }
}
