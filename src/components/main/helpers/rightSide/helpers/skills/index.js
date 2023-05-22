//Se importa libreria de react
import React from 'react';
//Se importa incono
import { BsCaretRightFill } from 'react-icons/bs';

//Se genera elemento
export const Skills = () => {
    return (
        <div>
            <h1 className='right-side__tile'><BsCaretRightFill className='right-side__icon'/>Habilidades</h1>
            <ul className='right-side__list-skills'>
                <li className='right-side__list-skill'>Modelamiento de bases de datos y sentencias SQL.</li>
                <li className='right-side__list-skill'>Manejo de consola Linux</li>
                <li className='right-side__list-skill'>Manejo de herramientas ofimáticas.</li>
                <li className='right-side__list-skill'>Menejo de herramientas en infraestructura de redes.</li>
                <li className='right-side__list-skill'>Desarrollo de aplicaciones en lenguaje como PYTHON, JAVA, JS.</li>
                <li className='right-side__list-skill'>Desarrollo landing page.</li>
            </ul>
        </div>
    );
};
