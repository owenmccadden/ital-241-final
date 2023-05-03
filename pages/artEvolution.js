import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navigation from '@/components/Navigation'
import RenaissanceLetter from '@/components/RenaissanceLetter'
import Footer from '@/components/Footer'
import FlipPage from '@/components/FlipPage'
import BackPage from '@/components/BackPage'


export default function ArtEvolution() {
    return (
      <div className={styles.container}>
        <Navigation />
        <h1 className={styles.mainHeader}>Leonardo Da Vinci: Art and Technology</h1>
        <h3 className={styles.writingTitle}>Evolution of Art</h3>
        <RenaissanceLetter>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ipsum dapibus, lacinia nulla a, auctor purus. Curabitur et elit urna. Suspendisse dignissim nunc ornare tincidunt dapibus. Phasellus ultrices ligula et nisl mattis molestie. Praesent metus tortor, maximus et posuere sit amet, vehicula vel nunc. Aenean scelerisque nulla nunc, et congue nunc mattis sit amet. Donec sit amet auctor velit, quis posuere lectus. Suspendisse convallis elementum tortor, vel tempor sapien viverra tristique. Fusce eleifend augue at magna luctus bibendum. Nam sagittis eros eget neque egestas eleifend. Vivamus convallis malesuada tellus, in hendrerit massa aliquet suscipit. Curabitur commodo ante volutpat lobortis sagittis. Aliquam efficitur cursus purus, id euismod quam semper eu. Integer id nisl purus.</p>
        </RenaissanceLetter>
  <FlipPage link='/techEvolution'></FlipPage>
  <BackPage link='/'></BackPage>

  
        <Footer />
      </div>
  
    )
  }
