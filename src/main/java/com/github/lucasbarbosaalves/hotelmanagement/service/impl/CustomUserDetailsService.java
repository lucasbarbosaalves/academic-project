package com.github.lucasbarbosaalves.hotelmanagement.service.impl;

import com.github.lucasbarbosaalves.hotelmanagement.exception.DomainException;
import com.github.lucasbarbosaalves.hotelmanagement.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username).orElseThrow(() -> new DomainException("Usuário não encontrado!"));
    }
}
