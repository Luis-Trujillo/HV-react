//Se importa libreria de react
import React from 'react';
//Se importa elemnto de experincia laboral
import { WorkExperience } from './helpers/workExperience';
import { Flp, Uno27 } from './helpers/workExperience/companies';
//Se importa elemento de estudios
import { Studies } from './helpers/studies';
import { UM, Latino, SantaJuana } from './helpers/studies/institutions';
//Se importa elemento de idiomas
import { Languages } from './helpers/languages';
// Se importa elemento de habilidades
import { Skills } from './helpers/skills';
//Se genera componente
export const RightSide = () => {
    return (
        <div className='main__right-side'>
            <WorkExperience experiencia1={Flp} experiencia2={Uno27} />
            <Studies institution1={SantaJuana} institution2={Latino} institution3={UM} />
            <Languages/>
            <Skills/>
        </div>
    );
};
