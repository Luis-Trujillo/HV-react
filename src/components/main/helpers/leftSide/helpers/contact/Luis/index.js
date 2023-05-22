//Se importa libreria
import React from 'react';
//Se importan iconos
import {FaEnvelope} from 'react-icons/fa'
import {ImLocation2} from 'react-icons/im'
import {FaPhoneAlt} from 'react-icons/fa'

//Se genera elemento
const Contact = ({ title, celPhone, email, address }) => {
    return (
        <div className='left-side__contact'>
            <h3 className='left-side__title'>{title}</h3>
            <p className='left-side__p'><FaPhoneAlt className='left-side__icon'/>Celular: {celPhone}</p>
            <p className='left-side__p'><FaEnvelope className='left-side__icon'/>Email: {email}</p>
            <p className='left-side__p'> <ImLocation2 className='left-side__icon'/>
                Dirección: {address.cra} {address.number}, {address.barrio}
            </p>
            <button className='left-side__button'>Escríbeme</button>
        </div>
    );
};

export default Contact;