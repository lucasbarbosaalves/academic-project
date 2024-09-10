import React, { useState } from "react";
import RoomResult from "../common/RoomResult";
import RoomSearch from "../common/RoomSearch";




const HomePage = () => {

    const [roomSearchResults, setRoomSearchResults] = useState([]);

    // Function to handle search results
    const handleSearchResult = (results) => {
        setRoomSearchResults(results);
    };

    return (
        <div className="home">
            {/* HEADER / BANNER ROOM SECTION */}
            <section>
                <header className="header-banner">
                    <img src="./assets/images/hotel.webp" alt="Blanc Hotel" className="header-image" />
                    <div className="overlay"></div>
                    <div className="animated-texts overlay-content">
                        <h1>
                            Bem vindo <span className="phegon-color">Blanc Hotel</span>
                        </h1><br />
                        <h3>Um refúgio de conforto e cuidado</h3>
                    </div>
                </header>
            </section>

            {/* SEARCH/FIND AVAILABLE ROOM SECTION */}
            <RoomSearch handleSearchResult={handleSearchResult} />
            <RoomResult roomSearchResults={roomSearchResults} />

            <h4><a className="view-rooms-home" href="/rooms">Todos os quartos!</a></h4>

            <h2 className="home-services">Serviços oferecidos pelo <span className="phegon-color">Blanc Hotel</span></h2>

            {/* SERVICES SECTION */}
            <section className="service-section"><div className="service-card">
                <img src="./assets/images/ac.png" alt="Air Conditioning" />
                <div className="service-details">
                    <h3 className="service-title">Ar condicionado</h3>
                    <p className="service-description">Mantenha-se fresco e confortável durante a sua estadia com nosso ar condicionado controlado individualmente no quarto..</p>
                </div>
            </div>
                <div className="service-card">
                    <img src="./assets/images/mini-bar.png" alt="Mini Bar" />
                    <div className="service-details">
                        <h3 className="service-title">Mini Bar</h3>
                        <p className="service-description">Desfrute de uma seleção conveniente de bebidas e lanches abastecidos no frigobar do seu quarto sem custo adiciona.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/parking.png" alt="Parking" />
                    <div className="service-details">
                        <h3 className="service-title">Estacionamento</h3>
                        <p className="service-description">Oferecemos estacionamento no local para sua conveniência. Por favor, pergunte sobre as opções de estacionamento com manobrista, se disponível.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/wifi.png" alt="WiFi" />
                    <div className="service-details">
                        <h3 className="service-title">WiFi</h3>
                        <p className="service-description">Mantenha-se conectado durante a sua estadia com acesso Wi-Fi de alta velocidade gratuito disponível em todos os quartos e áreas públicas.</p>
                    </div>
                </div>

            </section>
            {/* AVAILABLE ROOMS SECTION */}
            <section>

            </section>
        </div>
    );
}

export default HomePage;
