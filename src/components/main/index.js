//Se importa libreria de react
import React from 'react'
//Se importa lateral izquierdo
import { LeftSide } from './helpers/leftSide';
import './helpers/leftSide/styles/left.css';

//Se importa lateral derecho
import { RightSide } from './helpers/rightSide';
import './helpers/rightSide/styles/right.css'


//Se genera componente
export const Main = () => {
    return (
        <div className='main'>
            <LeftSide className='main__left-side'>
            </LeftSide>
            
            <RightSide className='main__right-side'>
            </RightSide> 

            
        </div>
    )
}
