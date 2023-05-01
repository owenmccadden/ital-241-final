import React from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
    return (
        <footer className={styles['footer']}>

            <p>
                Made by <a href="https://owenmccadden.github.io/">Owen McCadden</a>
            </p>
        </footer>
    );
}

export default Footer;
