//Se importa libreria de react
import React from 'react';
import { Navbar } from './helpers/navbar';
//Se genera componente de react
export const Header = () => {
  return (
    <div className='app__header'>
        <Navbar className='app__header-navbar' >

        </Navbar>
    </div>
  );
};
