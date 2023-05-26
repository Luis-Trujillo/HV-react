//Se importa libreria de react
import React from 'react'
//Se importa formulario de contacto
import { ContactForm } from './helpers/form';
import { SocialNetworks } from './helpers/socialNetworks';
import './helpers/socialNetworks/styles/socialNetworks.css';


//Se genera componente de footer de la página
export const Footer = () => {
    return (
        <div className='footer'>
            <SocialNetworks>
            </SocialNetworks>
            <ContactForm >
            </ContactForm>
        </div>
    );
};
