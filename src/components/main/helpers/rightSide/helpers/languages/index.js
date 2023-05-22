//Se importa lbreria de react
import React from 'react'
//Se importa inco
import {BsCaretRightFill} from 'react-icons/bs';

//Se genera elemento
export const Languages = () => {
    return (
        <div>
            <h1 className='right-side__tile'><BsCaretRightFill className='right-side__icon' />Idiomas</h1>
            <p className='right-side__p'>Iglés básico</p>
            <p className='right-side__p'>Español nativo</p>
        </div>
    );
};
