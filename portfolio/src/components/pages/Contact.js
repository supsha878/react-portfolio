import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (!inputValue.trim()) {
            setErrorMessage(`${inputType} field cannot be empty`);
        } else {
            setErrorMessage('');
        }

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!name) {
            setErrorMessage('name field cannot be empty');
            return;
        }
        if (!email) {
            setErrorMessage('email field cannot be empty');
            return
        }
        if (!validateEmail(email)) {
            setErrorMessage('email is invalid');
            return;
        }
        if (!message) {
            setErrorMessage('message field cannot be empty');
            return;
        }

        const completeMessage = {
            name: name,
            email: email,
            message: message
        };

        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');

        return completeMessage;
    };

    return (
        <main>
            <h2>Contact</h2>
            <form>
                <label htmlFor='name'>Name:</label>
                <input
                    value={name}
                    onClick={handleInputChange}
                    onChange={handleInputChange}
                    type='text'
                    name='name'
                    id='name'
                />
                <label htmlFor='email'>Email:</label>
                <input
                    value={email}
                    onClick={handleInputChange}
                    onChange={handleInputChange}
                    type='text'
                    name='email'
                    id='email'
                />
                <label htmlFor='message'>Message:</label>
                <textarea
                    value={message}
                    onClick={handleInputChange}
                    onChange={handleInputChange}
                    name='message'
                    id='message'
                ></textarea>
                <button
                    onClick={handleFormSubmit}
                    type='submit'
                >Send Message</button>
            </form>
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
        </main>
    );
}