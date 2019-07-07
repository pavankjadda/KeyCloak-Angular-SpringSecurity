package com.pj.keycloak.util;

import org.keycloak.KeycloakPrincipal;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;


@Component
public class UserInfoUtil
{
    public String getUserId()
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        KeycloakPrincipal keycloakPrincipal= (KeycloakPrincipal) authentication.getPrincipal();
        return keycloakPrincipal.getKeycloakSecurityContext().getToken().getPreferredUsername();
    }
}
