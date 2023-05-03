import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navigation from '@/components/Navigation'
import RenaissanceLetter from '@/components/RenaissanceLetter'
import Footer from '@/components/Footer'
import FlipPage from '@/components/FlipPage'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Navigation />
      <h1 className={styles.mainHeader}>Leonardo Da Vinci: Art and Technology</h1>
      <Image
        src={'/images/leonardo.png'}
        alt="Art"
        width={400}
        height={400}
        className={styles['leo-image']}
      />
      <h3 className={styles.writingTitle}>Intro</h3>

      <RenaissanceLetter>
        <p>Leonardo Da Vinci was a fascinating man that had revolutionary ideas about the ways in which art, technology, mathematics, and nature interact. He was a true humanist that took an interest in both the artistic and technological nature of the world around him as well as the advancements in these topics brought about by the people that came before him. To Leonardo, mortality was an interesting subject that didn’t start with birth and end with death. Instead, being the humanist that he was, he believed that the works, art, technology, and thoughts that people develop while on Earth far outlast the mortality of the human body, effectively making the human immortal. In our project, we wanted to focus on Leonardo’s thoughts on art, technology, and nature, as well as the personal relationship that he had with these subjects. We also wanted to prove Leonardo’s point that one’s works outlast the mortality of the human body. To prove this, we “brought” Leonardo back to life by using OpenAI’s GPT model to simulate a chatbot Leonardo Da Vinci. The Leonardo Da Vinci chatbot that is displayed on the final page of our website utilizes the works that Leonardo left behind to actively recreate a reenactment of what it may have been like to chat with Da Vinci himself. In doing this, we are in a sense proving Da Vinci’s belief that one’s works outlast the mortal human body, essentially making one immortal.
</p>
      </RenaissanceLetter>

      <FlipPage link='/artEvolution'></FlipPage>


      <Footer />
    </div>

  )
}
