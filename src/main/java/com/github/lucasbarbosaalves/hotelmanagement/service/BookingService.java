package com.github.lucasbarbosaalves.hotelmanagement.service;

import com.github.lucasbarbosaalves.hotelmanagement.dto.Response;
import com.github.lucasbarbosaalves.hotelmanagement.entity.Booking;

public interface BookingService {

    Response saveBooking(Long roomId, Long userId, Booking bookingRequest);

    Response findBookingByConfirmationCode(String confirmationCode);

    Response getAllBookings();

    Response cancelBooking(Long bookingId);
}
