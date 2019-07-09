package com.pj.keycloak.util;

import org.keycloak.KeycloakPrincipal;
import org.keycloak.representations.AccessToken;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;


@Component
public class UserInfoUtil
{
    private Logger logger= LoggerFactory.getLogger(UserInfoUtil.class);

    public String getPreferredUsername(HttpServletRequest httpServletRequest)
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        KeycloakPrincipal keycloakPrincipal= (KeycloakPrincipal) authentication.getPrincipal();
        AccessToken accessToken=keycloakPrincipal.getKeycloakSecurityContext().getToken();
/*

        KeycloakAuthenticationToken keycloakAuthenticationToken= (KeycloakAuthenticationToken) httpServletRequest.getUserPrincipal();
        logger.info("Subject: {}",keycloakAuthenticationToken.getAccount().getKeycloakSecurityContext().getToken().getSubject());
*/

        logger.info("getUserPrincipal(): {}",httpServletRequest.getUserPrincipal());

        return accessToken.getPreferredUsername();
    }
}
