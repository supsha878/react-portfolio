import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from '../pages/About';
import Projects from '../pages/About';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

export default function Content() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        } else if (currentPage === 'Projects') {
            return <Projects />;
        } else if (currentPage === 'Contact') {
            return <Contact />;
        } else if (currentPage === 'Resume') {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </>
    );
}