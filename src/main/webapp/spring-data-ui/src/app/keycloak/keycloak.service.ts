import {Injectable} from "@angular/core";
import * as Keycloak from "keycloak-js";

@Injectable({
  providedIn: 'root'
})
export class KeycloakService
{
  private keycloakAuth: any;

  constructor()
  {
  }

  init(): Promise<any>
  {
    return new Promise((resolve, reject) =>
    {
      const config = {
        'url': 'http://localhost:8080/auth',
        'realm': 'nci',
        'clientId': 'angular-app'
      };
      // @ts-ignore
      this.keycloakAuth = new Keycloak(config);
      this.keycloakAuth.init({onLoad: 'login-required'})
          .success(() =>
          {
            resolve();
          })
          .error(() =>
          {
            reject();
          });
    });
  }

  getToken(): string
  {
    return this.keycloakAuth.token;
  }
}
