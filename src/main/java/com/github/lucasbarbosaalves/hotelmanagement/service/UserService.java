package com.github.lucasbarbosaalves.hotelmanagement.service;

import com.github.lucasbarbosaalves.hotelmanagement.dto.LoginRequest;
import com.github.lucasbarbosaalves.hotelmanagement.dto.Response;
import com.github.lucasbarbosaalves.hotelmanagement.entity.User;

public interface UserService {
    Response register(User user);
    Response login(LoginRequest loginRequest);
    Response getAllUsers();
    Response getUserBookingHistory(String userId);
    Response deleteUser(String userId);
    Response getUserById(String userId);
    Response getMyInfo(String userId);
}
