import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navigation from '@/components/Navigation'
import RenaissanceLetter from '@/components/RenaissanceLetter'
import Footer from '@/components/Footer'
import FlipPage from '@/components/FlipPage'
import BackPage from '@/components/BackPage'


export default function TechEvolution() {
  return (
    <div className={styles.container}>
      <Navigation />
      <h1 className={styles.mainHeader}>Leonardo Da Vinci: Art and Technology</h1>
      <h3 className={styles.writingTitle}>Evolution of Technology</h3>
      <RenaissanceLetter text={<p>
        Leonardo believed that human dissection was necessary to obtain a true and perfect knowledge of the human body. He preferred the pig and monkey as animal systems because he believed terrestrial animals resembled each other by their variations in limb length and thickness. Leonardo used the information gained from dissection, not for medical reasons, but for artistic representation of the human body.  Today, technology has evolved, and X-rays are readily available at all medical facilities. X-rays are a form of electromagnetic radiation which can pass through the body and generate images of tissues and structures inside the body. Artistic renderings of the human form such as those penned by Leonardo were a precursor to this technology, but this advanced technology now eradicates the need for dissection for artistic representation.
        <br></br>
        <br></br>
        Leonardo’s interest in anatomy went beyond just that of artistic interest. He believed that the human form was a microcosm for the workings of the universe. For example, man has bones to support his body while rocks are the main support of the earth. Today, satellite technology can provide detailed images of the earth showing all of its landmasses and bodies of water. In fact, technology has advanced so much that companies like SpaceX are flying consumers to orbit the earth and view outer space from above. Today artists as well as geographers and cartographers can use satellite imagery to paint pictures, study the earth’s components and create maps.
        <br></br>
        <br></br>
        Leonardo proposed that the structure of man paralleled the structure of the universe. For example, blood spreads throughout the body just as water spreads throughout the earth, flowing from large sources to smaller tributaries. MRI (magnetic resonance imaging) imaging is used at modern medical centers to provide non-invasive, three-dimensional images of the human body. PET (positron emission tomography) scanning is an imaging technique that shows how organs and tissues work. These tests show how blood flows to and from organs. These advanced technologies have modernized medicine and provided artists with new tools to understand and depict how the body works.
        <br></br>
        <br></br>
        Leonardo’s Vitruvian Man combined the principles of humanism, geometry, anatomy and art. This drawing provided ideal body proportions showing a nude man in two superimposed positions.  When man places his feet on the ground and outstretches his arms, he is contained within a square; but, when he is in a spread-eagle position, he can be inscribed in a circle. Vitruvius was a precursor to modern architectural technology.  As technology continues to advance it allows architects to be more creative and bring their visions to life. BIM (Building Information Modeling) is used today by engineers, designers, and architects to track projects from start to finish. Architects use 3D printing to create prototypes of buildings. Virtual Reality is popular with gaming, but architects use it to show 3D renderings of their sketches. These technologies have been made possible by advances in the fields of math and engineering. 
      </p>} />

      <BackPage link='/artEvolution'></BackPage>
      <FlipPage link='/chat'></FlipPage>


      <Footer />
    </div>

  )
}
