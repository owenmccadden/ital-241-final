import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button } from 'react-bootstrap';
import PromptForm from '@/components/PromptForm';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Chat with Leonardo Davinci</h1>
      <PromptForm />
    </div>
  )
}
