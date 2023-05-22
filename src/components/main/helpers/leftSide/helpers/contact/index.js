//Se importa libreria de react
import React from 'react';
import Contact from './Luis';

const ComponentContac = () => {
  const title = 'Contacto';
  const celPhone = '3202109201';
  const email = 'tluis2408@gmail.com';
  const address = {
    cra: '21',
    number: '#72-17',
    barrio: 'Alta Suiza',
  };

  return (
    <div>
      <Contact title={title} celPhone={celPhone} email={email} address={address} />
    </div>
  );
};

export default ComponentContac;