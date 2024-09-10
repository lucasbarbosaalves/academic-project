import React from 'react';
import { Link } from 'react-router-dom';

const BookingResult = ({ bookingSearchResults }) => {
  return (
    <div className="booking-results">
      {bookingSearchResults.map((booking) => (
        <div key={booking.id} className="booking-result-item">
          <p>Código do Quarto: {booking.roomId}</p>
          <p>Código do Usuário: {booking.userId}</p>
          <p>Início: {booking.startDate}</p>
          <p>Término: {booking.endDate}</p>
          <p>Status: {booking.status}</p>
          <Link to={`/admin/edit-booking/${booking.id}`} className="edit-link">Editar</Link>
        </div>
      ))}
    </div>
  );
};

export default BookingResult;
