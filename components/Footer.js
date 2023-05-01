import React from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
    return (
        <footer className={styles['footer']}>

            <h5>ITAL 241 – UNC Chapel Hill</h5>
            <p>
                Created by Owen McCadden, Ben Woodman, Tyler Trexler, and Dair McNinch
            </p>
        </footer>
    );
}

export default Footer;
