import React from 'react';
import styles from '../styles/FlipPage.module.css';

function BackPage(props) {
    return (
        <a href={props.link}>
             <div className={styles['arrowBack']}>
                <span></span>
                <span></span>
            </div>
        </a>
        

    )
}

export default BackPage;
