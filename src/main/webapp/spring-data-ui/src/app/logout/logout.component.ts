import {Component, OnInit} from "@angular/core";
import {AuthService} from "src/app/login/auth.service";
import {KeycloakService} from "../keycloak/keycloak.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private keycloakService:KeycloakService,
              private authService:AuthService) { }

  ngOnInit()
  {
    //this.keycloakService.logout();
    this.authService.logout();
  }

}
