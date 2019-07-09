package com.pj.keycloak.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class MyUserDetails implements UserDetails
{
    private static final long serialVersionUID = -8240868059777326234L;
    private User user;

    private Collection<? extends GrantedAuthority> roles;

    MyUserDetails(User user, Collection<? extends GrantedAuthority> roles)
    {
        this.user = user;
        this.roles = roles;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities()
    {
        return roles;
    }

    @Override
    public String getPassword()
    {
        return user.getPassword();
    }

    @Override
    public String getUsername()
    {
        return user.getUsername();
    }

    @Override
    public boolean isAccountNonExpired()
    {
        return user.isAccountNonExpired();
    }

    @Override
    public boolean isAccountNonLocked()
    {
        return user.isAccountNonLocked();
    }

    /**
     * Indicates whether the user's credentials (password) has expired. Expired
     * credentials prevent authentication.
     *
     * @return <code>true</code> if the user's credentials are valid (ie non-expired),
     * <code>false</code> if no longer valid (ie expired)
     */
    @Override
    public boolean isCredentialsNonExpired()
    {
        return user.isCredentialsNonExpired();
    }

    @Override
    public boolean isEnabled()
    {
        return user.isEnabled();
    }

}
