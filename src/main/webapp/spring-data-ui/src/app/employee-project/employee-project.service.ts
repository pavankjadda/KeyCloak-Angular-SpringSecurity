import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {EmployeeProject} from "./employee-project";

@Injectable({
  providedIn: 'root'
})
export class EmployeeProjectService
{
  constructor(private httpClient:HttpClient) { }

  getEmployeeProjects(url:string)
  {
    return this.httpClient.get<EmployeeProject[]>(url);
  }
}
