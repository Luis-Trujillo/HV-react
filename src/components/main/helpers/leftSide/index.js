//Se importa libreria de react
import React from 'react';
//Se importan elementos
import { AboutMe } from './helpers/about-me';
//Se importan elemento contact
import Contact from './helpers/contact';
//Se importa elemento de referencias
import { References } from './helpers/references';
//Se genera componente
export const LeftSide = () => {
    return (
        <div className='main__left-side'>
            <AboutMe/>
            <hr className='dotted-hr'/>
            <Contact/>
            <hr className='dotted-hr'/>
            <References/>

        </div>
    );
};
