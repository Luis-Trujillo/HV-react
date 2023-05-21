//Se importa libreria de react
import React from 'react';
//Se importa foto del perfil
import Photo from '../photo/Luis-Trujillo.jpeg';

//Se genera componente
export const Navbar = () => {
    return (
        <div className='header__navbar'>
            <nav className="navbar">
            <div className="navbar__photo"><img className='navbar__photo-image' src={Photo} alt='Profile' /></div>
                <ul className="navbar__links">
                    <li><a href="/">Inicio</a></li>
                    <li><a href='/sobre-mi'>Sobre mi</a></li>
                    <li><a href='/referencias'>Referencias</a></li>
                    <li><a href="/experiencia">Experiencia</a></li>
                    <li><a href="/educacion">Educación</a></li>
                    <li><a href='/idiomas'>Idiomas</a></li>
                    <li><a href="/habilidades">Habilidades</a></li>
                    <li><a href='/cursos'>Cursos</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </nav>
        </div>
    );
};
