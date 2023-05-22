//Se importa libreria de react
import React from 'react';
//Se importan iconos
import {FaUserCircle} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';

export const References = () => {
    return (
        <div className='left-side__references'>
            <h3 className='left-side__title'>Referencias</h3>
            <p className='left-side__p'><FaUserCircle className='left-side__icon'/>Fulanita #1 </p>
            <p className='left-side__p'><FaPhoneAlt className='left-side__icon'/>Teléfono: 3205556662</p>
            <p className='left-side__p'> <FaUserCircle className='left-side__icon'/>Pepito Pérez</p>
            <p className='left-side__p'><FaPhoneAlt className='left-side__icon'/>Teléfono: 3203337772</p>
        </div>
    );
};
