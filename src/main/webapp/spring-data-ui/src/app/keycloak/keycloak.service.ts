import {Injectable} from "@angular/core";
import * as Keycloak from "keycloak-js";
import {KeycloakInstance} from "keycloak-js";

@Injectable({
  providedIn: 'root'
})
export class KeycloakService
{
  private keycloakAuth: KeycloakInstance;

  constructor()
  {
  }

  init(): Promise<any>
  {
    return new Promise((resolve, reject) =>
    {
      const config = {
        'url': 'http://localhost:8080/auth',
        'realm': 'keycloakdemo',
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

  logout()
  {
    const options = {
      'redirectUri': 'http://localhost:4200',
      'realm': 'keycloakdemo',
      'clientId': 'angular-app'
    };
    this.keycloakAuth.logout(options);
  }
}
