import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Project Overview', path: '/project-overview' },
        { name: 'Team', path: '/team' },
        { name: 'Equipment', path: '/equipment' },
        { name: 'Publications', path: '/publications' },
        { name: 'Demo', path: '/demo' },
        { name: 'Contacts', path: '/contact' },
    ];

    return (
        <nav style={styles.nav}>
            <div style={styles.container}>
                <div style={styles.logo}>MUSIC4D</div>

                {/* Mobile Menu Button */}
                <button style={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>

                {/* Desktop Menu */}
                <ul style={{ ...styles.menu, ...(isOpen ? styles.menuOpen : {}) }}>
                    {navItems.map((item) => (
                        <li key={item.name} style={styles.menuItem}>
                            <Link to={item.path} style={styles.link}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        backgroundColor: '#fff',
        borderBottom: '1px solid #eee',
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'var(--text-heading)',
    },
    menuButton: {
        display: 'none',
        background: 'none',
        border: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer',
    },
    menu: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        gap: '20px',
    },
    menuItem: {},
    link: {
        textDecoration: 'none',
        color: 'var(--text-main)',
        fontWeight: '500',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
    },
    // Media query style simulation for logic - in real CSS often easier, but inline ok for simple
};

export default Navbar;
