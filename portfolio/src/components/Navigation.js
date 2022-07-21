import React from 'react';

export default function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav>
            <li>
                <a
                    href='#about'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'active' : ''}
                >About</a>
            </li>
            <li>
                <a
                    href='#projects'
                    onClick={() => handlePageChange('Projects')}
                    className={currentPage === 'Projects' ? 'active' : ''}
                >Projects</a>
            </li>
            <li>
                <a
                    href='#contact'
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'active' : ''}
                >Contact</a>
            </li>
            <li>
                <a
                    href='#resume'
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'active' : ''}
                >Resume</a>
            </li>
        </nav>
    )
}