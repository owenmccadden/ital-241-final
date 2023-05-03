import React from 'react';
import styles from '../styles/RenaissanceLetter.module.css'

const RenaissanceLetter = ({ text }) => {
    return (
        <div className={styles['renaissance-letter']}>
            <div>{text}</div>
            {/* {props.children} */}
        </div>
    );
};

export default RenaissanceLetter;
