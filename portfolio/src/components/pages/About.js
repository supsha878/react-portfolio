import React from 'react';
import supriya from '../../assets/images/supriya.jpg';

export default function About() {
    return (
        <>
            <h2>About</h2>
            <article>
                <p>
                    I am an up-and-coming web developer. I graduated from University of Washington in 2020 with a Bachelor or Science degree in Molecular, Cellular, and Developmental Biology and a Minor in Informatics.
                </p>
                <p>
                    I have a wide range of skills from photoshop to R, and I learn new programs and languages quickly.
                </p>
            </article>
            <img src={supriya} alt='Supriya on the Pillbox Hike in Kailua, Hawaii' />
        </>
    );
}