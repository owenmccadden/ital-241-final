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

      <RenaissanceLetter text="Insert white paper here." />

      <FlipPage link='/artEvolution'></FlipPage>


      <Footer />
    </div>

  )
}
