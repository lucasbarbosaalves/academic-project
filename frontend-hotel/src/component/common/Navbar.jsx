import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';

function Navbar() {
    const isAuthenticated = ApiService.isAuthenticated();
    const isAdmin = ApiService.isAdmin();
    const isUser = ApiService.isUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        const isLogout = window.confirm('Deseja deslogar?');
        if (isLogout) {
            ApiService.logout();
            navigate('/home');
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/home">Blanc Hotel</NavLink>
            </div>
            <ul className="navbar-ul">
                <li><NavLink to="/home" activeclassname="active">Início</NavLink></li>
                <li><NavLink to="/rooms" activeclassname="active">Quartos</NavLink></li>
                <li><NavLink to="/find-booking" activeclassname="active">Encontre sua reserva</NavLink></li>

                {isUser && <li><NavLink to="/profile" activeclassname="active">Perfil</NavLink></li>}
                {isAdmin && <li><NavLink to="/admin" activeclassname="active">Administrador</NavLink></li>}

                {!isAuthenticated &&<li><NavLink to="/login" activeclassname="active">Login</NavLink></li>}
                {!isAuthenticated &&<li><NavLink to="/register" activeclassname="active">Cadastro</NavLink></li>}
                {isAuthenticated && <li onClick={handleLogout}>Sair</li>}
            </ul>
        </nav>
    );
}

export default Navbar;
