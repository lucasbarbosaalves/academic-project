package com.github.lucasbarbosaalves.hotelmanagement.repository;

import com.github.lucasbarbosaalves.hotelmanagement.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking, Long>{

    Optional<Booking> findByBookingConfirmationCode(String confirmationCode);
}
