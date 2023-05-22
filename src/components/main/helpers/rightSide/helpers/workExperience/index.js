//Se importa libreria de react
import React from 'react'
//Se importan iconos
import {BsCaretRightFill} from 'react-icons/bs'

//Se genera elemento
export const WorkExperience = ({experiencia1, experiencia2}) => {
    return (
        <div>
            <h1 className='right-side__tile'><BsCaretRightFill className='right-side__icon'/>Experiencia Laboral</h1>
            <h3 className='right-side__h3'>{experiencia1.companiName}</h3>
            <p className='right-side__p'>{experiencia1.finished}</p>
            <p className='right-side__p'>{experiencia1.charge}</p>

            <h3 className='right-side__h3'>{experiencia2.companiName}</h3>
            <p className='right-side__p'>{experiencia2.finished}</p>
            <p className='right-side__p'>{experiencia2.charge}</p>
        </div>
    );
};
