//Se importa libreria de react
import React from 'react'
import { SlSocialTwitter, SlSocialInstagram } from 'react-icons/sl';
import { FaWhatsapp } from 'react-icons/fa';
import {RiFacebookBoxFill} from 'react-icons/ri';

//Se importa Elemento de redes sociales
export const SocialNetworks = () => {
    return (

        <div className="social-media">
            <a 
            href="whatsapp" 
            className="social-media__link social-media__link--whatsapp"> 
            <FaWhatsapp className='social-media__icon'/>
            Whatsapp
            
            </a>
            <a 
            href="facebook" 
            className="social-media__link social-media__link--facebook"> 
            <RiFacebookBoxFill className='social-media__icon'/>
            Facebook
            
            </a>
            <a 
            href="twitter" 
            className="social-media__link social-media__link--twitter"> 
            <SlSocialTwitter className='social-media__icon'/>
            Twitter
            </a>
            <a
                href="instagram"
                className="social-media__link social-media__link--instagram">
                <SlSocialInstagram className='social-media__icon'/>
                Instagram
            </a>
        </div>

    );
};
