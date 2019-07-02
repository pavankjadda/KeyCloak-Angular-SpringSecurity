import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CategoryListComponent} from "./category-list/category-list.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";

const routes: Routes = [
  {
    path: 'category/list',
    component: CategoryListComponent
  },
  {
    path: 'employee/list',
    component: EmployeeListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
