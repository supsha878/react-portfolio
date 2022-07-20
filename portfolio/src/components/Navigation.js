import React from 'react';
import '../styles/Navigation.css';

export default function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul>
            <li>
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'active' : ''}
                >About</a>
            </li>
            <li>
                <a
                    href="#projects"
                    onClick={() => handlePageChange('Projects')}
                    className={currentPage === 'Projects' ? 'active' : ''}
                >Projects</a>
            </li>
            <li>
                <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'active' : ''}
                >Contact</a>
            </li>
            <li>
                <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'active' : ''}
                >Resume</a>
            </li>
        </ul>
    );
}

// TODO: add ternary operators and active links etc