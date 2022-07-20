import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <h1>Supriya Sharma</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    );
}