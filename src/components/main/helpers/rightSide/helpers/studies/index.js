//Se importa libreria de react
import React from 'react'
//Se importa icono
import {BsCaretRightFill} from 'react-icons/bs';

//Se genera elemento
export const Studies = ({institution1, institution2, institution3}) => {
    return (
        <div>
            <h1 className='right-side__tile'><BsCaretRightFill className='right-side__icon'/>Estudios</h1>
            <h3 className='right-side__h3'>{institution1.institutionName}</h3>
            <p className='right-side__p'>{institution1.finished} </p>
            <p className='right-side__p'> {institution1.diplomaTitle} </p>

            <h3 className='right-side__h3'>{institution2.institutionName}</h3>
            <p className='right-side__p'>{institution2.finished} </p>
            <p className='right-side__p'>{institution2.diplomaTitle} </p>

            <h3 className='right-side__h3'>{institution3.institutionName}</h3>
            <p className='right-side__p'>{institution3.finished} </p>
            <p className='right-side__p'>{institution3.diplomaTitle} </p>
        </div>
    )
}
