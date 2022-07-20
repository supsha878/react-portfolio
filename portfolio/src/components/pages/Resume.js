import React from 'react';
import resume from '../../assets/files/SSharma_Resume.pdf'

export default function Resume() {
    return (
        <main>
            <h2>Resume</h2>
            <h3>Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>G Suite</li>
                <li>Microsoft Office Suite</li>
            </ul>

            <p>If you would like to know more about me, here is a link to <a href={resume} download>download my resume</a></p>
        </main>
    );
}