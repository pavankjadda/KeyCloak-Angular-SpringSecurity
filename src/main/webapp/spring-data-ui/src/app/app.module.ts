import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {APP_INITIALIZER, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NgxSpinnerModule} from "ngx-spinner";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeProjectComponent} from "./employee-project/employee-project.component";
import {TokenInterceptor} from "./interceptors/token-interceptor";
import {KeycloakService} from "./keycloak/keycloak.service";
import {LogoutComponent} from "./logout/logout.component";

export function kcFactory(keycloakService: KeycloakService) {
  return () => keycloakService.init();
}
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    LogoutComponent,
    EmployeeProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: kcFactory,
      deps: [KeycloakService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
