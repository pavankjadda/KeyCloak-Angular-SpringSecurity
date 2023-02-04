import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
	providedIn: 'root',
})
export class KeycloakService {
	keycloak = new Keycloak({
		url: 'http://localhost:8080/auth',
		realm: 'keycloakdemo',
		clientId: 'angular-app',
	});

	init(): Promise<any> {
		return new Promise((resolve, reject) => {
			this.keycloak
				.init({ onLoad: 'login-required' })
				.then(() => {})
				.catch(() => {
					reject();
				});
		});
	}

	getToken(): string {
		return this.keycloak.token;
	}

	logout() {
		const options = {
			redirectUri: 'http://localhost:4200',
			realm: 'keycloakdemo',
			clientId: 'angular-app',
		};
		this.keycloak.logout(options);
	}
}
