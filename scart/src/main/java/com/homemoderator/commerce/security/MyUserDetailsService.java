package com.homemoderator.commerce.security;

import com.homemoderator.commerce.dao.UserRepository;
import com.homemoderator.commerce.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository users;

//    todo: get spring security stuff in order

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User u = users.findByUsername(s);
        if (u == null)
            throw new UsernameNotFoundException("user not found");

        return new UserDetail(u);
    }
}
