package com.github.lucasbarbosaalves.hotelmanagement.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.github.lucasbarbosaalves.hotelmanagement.entity.Booking;
import com.github.lucasbarbosaalves.hotelmanagement.entity.Room;
import com.github.lucasbarbosaalves.hotelmanagement.entity.User;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BookingDTO {

    private Long id;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private Integer numberOfAdults;
    private Integer numberOfChildren;
    private Integer numberOfGuests;
    private String bookingConfirmationCode;
    private UserDTO user;
    private RoomDTO room;
}
