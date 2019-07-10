import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeProjectComponent} from "./employee-project/employee-project.component";
import {LogoutComponent} from "./logout/logout.component";

const routes: Routes = [
  {
    path: 'employee/list',
    component: EmployeeListComponent
  },
  {
    path: 'employee_project/list',
    component: EmployeeProjectComponent
  },
  {
    path: 'logout',
    component:LogoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
