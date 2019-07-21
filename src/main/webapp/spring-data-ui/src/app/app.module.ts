import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NgxSpinnerModule} from "ngx-spinner";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeProjectComponent} from "./employee-project/employee-project.component";
import {EmployeeViewComponent} from "./employee-view/employee-view.component";
import {TokenInterceptor} from "./interceptors/token-interceptor";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    LogoutComponent,
    EmployeeProjectComponent,
    EmployeeViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
