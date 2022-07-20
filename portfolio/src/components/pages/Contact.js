import React from 'react';

export default function Contact() {

    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <h2>Contact</h2>
            <form>
                <label htmlFor='name'>Name:</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                />
                <label htmlFor='email'>Email:</label>
                <input
                    type='text'
                    name='email'
                    id='email'
                />
                <label htmlFor='message'>Message:</label>
                <textarea
                    name='message'
                    id='message'
                ></textarea>
                <button
                    onClick={handleFormSubmit}
                    type='submit'
                >Send Message</button>
            </form>
        </>
    );
}