import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ApiService from '../../service/ApiService';

const RoomResult = ({ roomSearchResults }) => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const isAdmin = ApiService.isAdmin();
    return (
        <section className="room-results">
            {roomSearchResults && roomSearchResults.length > 0 && (
                <div className="room-list">
                    {roomSearchResults.map(room => (
                        <div key={room.id} className="room-list-item">
                            <img className='room-list-item-image' src={room.roomPhotoUrl} alt={room.roomType} />
                            <div className="room-details">
                                <h3>{room.roomType}</h3>
                                <p>Preço: ${room.roomPrice} / pernoite</p>
                                <p>Descrição do quarto: {room.roomDescription}</p>
                            </div>

                            <div className='book-now-div'>
                                {isAdmin ? (
                                    <button
                                        className="edit-room-button"
                                        onClick={() => navigate(`/admin/edit-room/${room.id}`)} // Navigate to edit room with room ID
                                    >
                                        Editar Quarto
                                    </button>
                                ) : (
                                    <button
                                        className="book-now-button"
                                        onClick={() => navigate(`/room-details-book/${room.id}`)} // Navigate to book room with room ID
                                    >
                                        Visualizar/Reservar
                                    </button>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default RoomResult;
