import React from 'react';
import resume from '../../assets/files/SSharma_Resume.pdf'

export default function Resume() {
    return (
        <main className='resume'>
            <h2>Resume</h2>
            <article>
                <div className='proficiencies'>
                    <p>While I am always learning new languages and concepts, I am proficient in the following languages and skills:</p>
                    <div className='prof-list'>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                        </ul>
                        <ul>
                            <li>SQL</li>
                            <li>G Suite</li>
                            <li>Microsoft Office Suite</li>
                        </ul>
                    </div>
                </div>
                <p>If you would like to know more about me, here is a link to <a href={resume} download>download my resume</a></p>
            </article>
        </main>
    );
}