import React from 'react'
import styles from '../styles/Chat.module.css'
import Navigation from '@/components/Navigation';
import PromptForm from '@/components/PromptForm';
import Footer from '@/components/Footer';
import RenaissanceLetter from '@/components/RenaissanceLetter';
import FlipPage from '@/components/FlipPage';
import BackPage from '@/components/BackPage';

const chat = () => {
    return (
        <div className={styles['container']}>
            <Navigation />
            <h1 className={styles['header']}>Chat with Leonardo Da Vinci</h1>
            <RenaissanceLetter text="Da Vinci saw technology much in the same way that he saw art. Much like art, he saw technology as an extension of nature, an extension that can both better tell a story as well as benefit the general population. “If you, historians, or mathematicians, had not seen things with your eyes, you would have been able to write about them poorly” (Da Vinci 190). To Di Vinci, art and technology were one in the same, they were imitations of nature that can extend the human experience. Da Vinci saw technology much in the same way that he saw art. Much like art, he saw technology as an extension of nature, an extension that can both better tell a story as well as benefit the general population. “If you, historians, or mathematicians, had not seen things with your eyes, you would have been able to write about them poorly” (Da Vinci 190). To Di Vinci, art and technology were one in the same, they were imitations of nature that can extend the human experience. Leonardo says “The name of a man may differ from country to country, but a man’s form is never changed except by death” (Da Vinci 190). In short, while people differ across the world, a person is a person, and it matters not what their name or origin may be, but instead who they are and what they do on Earth. Most importantly, he claims “a beautiful object that is mortal passes away, but not so with art” (Da Vinci 189). In short, Da Vinci felt that while people are inherently mortal, and their bodies will eventually die, their works and contributions to the world will carry on. Art and technology can be used interchangeably here, Da Vinci was mostly trying to convey that a person’s contributions to society will “live on” and make a person immortal, in a sense. It is due to Da Vinci’s contributions to society that we are able to make the chatbot that we did today. The chatbot below uses the OpenAI’s GPT LLM to take what it has learned about Leonardo from his works and recreate a version of himself in chatbot form. Leonardo was right: a person’s works live on forever, despite the human body being the mortal being that it is. It’s because of his works that we can simulate a version of himself to chat with on this page. It is also due to the works of revolutionary thinkers like Leonardo that we have the advanced technology that we do today. The interest in nature, art, technology, coupled with the humanist mindset that Leonardo had, paved the way for modern technology to thrive in the world. Type a prompt in the chatbot below to “interact” with this timeless version of Leonardo!" />
            <FlipPage link='/art'></FlipPage>
            <BackPage link='/techEvolution'></BackPage>
            <PromptForm />
            <Footer />
        </div>
    )
}

export default chat;