import {UserProfile} from "./user-profile";

export class Employee extends UserProfile
{
  employeeId: number;
  location: string;
  salary: string;
}
