//Se imoporta libreria de react
import React, { useState } from 'react';
//Se importan estilos propios del form de contacto 
import './styles/form.css';

//Se genera formulario
export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.subject && formData.message) {
            // Se envía el formulario
            console.log(formData);
            alert('¡Mensaje enviado!');
            // También puedes resetear los campos del formulario aquí
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } else {
            alert('Por favor, completa todos los campos del formulario.');
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className="contact-form__title">Deja tu mensaje</h2>
            <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                className="contact-form__input"
            />
            <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                className="contact-form__input"
            />
            <input
                type="text"
                name="subject"
                placeholder="Asunto"
                value={formData.subject}
                onChange={handleChange}
                className="contact-form__input"
            />
            <textarea
                name="message"
                placeholder="Mensaje"
                value={formData.message}
                onChange={handleChange}
                className="contact-form__textarea"
            ></textarea>
            <button type="submit" className="contact-form__button">Enviar</button>
        </form>
    );
};


