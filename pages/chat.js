import React from 'react'
import styles from '../styles/Chat.module.css'
import Navigation from '@/components/Navigation';
import PromptForm from '@/components/PromptForm';
import Footer from '@/components/Footer';

const chat = () => {
    return (
        <div className={styles['container']}>
            <Navigation />
            <h1 className={styles['header']}>Chat with Leonardo Da Vinci</h1>
            <PromptForm />
            <Footer />
        </div>
    )
}

export default chat;