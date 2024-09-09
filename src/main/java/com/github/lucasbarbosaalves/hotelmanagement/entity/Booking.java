package com.github.lucasbarbosaalves.hotelmanagement.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Data de check-in é obrigatória")
    private LocalDate checkInDate;
    @Future(message = "Data de check-out deve ser no futuro")
    private LocalDate checkOutDate;

    @Min(value = 1, message = "Número de adultos deve ser maior que 0")
    private Integer numberOfAdults;
    @Min(value = 0, message = "Número de crianças deve ser maior que 0")
    private Integer numberOfChildren;
    private Integer numberOfGuests;

    private String bookingConfirmationCode;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    private Room room;

    public void calculateNumberOfGuests() {
        this.numberOfGuests = this.numberOfAdults + this.numberOfChildren;
    }

    public void setNumberOfChildren(Integer numberOfChildren) {
        this.numberOfChildren = numberOfChildren;
        calculateNumberOfGuests();
    }

    public void setNumberOfAdults(Integer numberOfAdults) {
        this.numberOfAdults = numberOfAdults;
        calculateNumberOfGuests();

    }

    @Override
    public String toString() {
        return "Booking{" +
                "id=" + id +
                ", checkInDate=" + checkInDate +
                ", checkOutDate=" + checkOutDate +
                ", numberOfAdults=" + numberOfAdults +
                ", numberOfChildren=" + numberOfChildren +
                ", numberOfGuests=" + numberOfGuests +
                ", bookingConfirmationCode='" + bookingConfirmationCode + '\'' +
                ", user=" + user +
                ", room=" + room +
                '}';
    }
}
