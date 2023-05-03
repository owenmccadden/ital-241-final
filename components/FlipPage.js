import React from 'react';
import styles from '../styles/FlipPage.module.css';

function FlipPage(props) {
    return (
        <a href={props.link}>
             <div className={styles['arrow']}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </a>
        

    )
}

export default FlipPage;
