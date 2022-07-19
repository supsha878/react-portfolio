import React from 'react';

export default function Contact(props) {
    return (
        <>
            <form>
                <label htmlFor="name">Name:</label>
                <input
                    onChange={props.handleInputChange} // TODO: write function, multfunctions
                    value={props.value} //
                    name="name"
                    type="text"
                    id="name"
                />
                <label htmlFor="email">Email:</label>
                <input
                    onchange={props.handleInputChange} //
                    value={props.value} //
                    name="email"
                    type="text"
                    id="email"
                />
                <label htmlFor="message">Message:</label>
                <textarea
                    onchange={props.handleInputChange}
                    value={props.value}
                    name="message"
                    id="message"
                ></textarea>
                <button
                    onClick={props.handleFormSubmit} // TODO
                    type="submit"
                >Submit</button>
            </form>
        </>
    );
}

// name, email, message