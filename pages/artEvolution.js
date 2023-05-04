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
      <h1 className={styles.mainHeader}>Leonardo Da Vinci: Evolution of Art and Technology</h1>
      <h3 className={styles.writingTitle}>Evolution of Art</h3>
      <RenaissanceLetter text={
        <p>
          Leonardo once said that “If you condemn painting, which is the only imitator of all nature’s visible works, you will certainly despise a subtle invention which brings philosophy and subtle speculation to the consideration of the nature of all forms - seas and land, trees, animals, plants and flowers - which are surrounded by shade and light. And this is true knowledge and the legitimate offspring of nature; for painting is born of nature - or, to be more correct, we well say it is the grandchild of nature; for all visible things are produced by nature, and these, her children, have given birth to painting.” Clearly, he saw painting as the greatest imitator of nature, and believed that greatness in art is achieved the more someone’s work is able to emulate nature. Unbeknownst to da Vinci at the time, Charles Darwin would a few hundred years later be discovering evidence that founded the ideas of natural selection and evolution. We now know that nature will continuously adapt throughout its collective competition for survival, and if painting is born of nature, then painting and art must itself adapt to the changes of our environment and natural world. The evolution of art itself can be thought of in a strikingly similar fashion, since it also adapts and changes under various stressors. Take the example of the wildlife and native plants that have returned to the region surrounding the site of the Chernobyl nuclear power plant disaster: life will always find a way. And if humans are still around, art will too. 
          <br></br>
          <br></br>
          “The painter will produce pictures of little worth if he takes for his standard the pictures of others. But if he will learn from the objects of nature he will bear good fruit; this we have seen in the painters following the Romans who always imitated both, and their art continued to decline from age to age . . . Later this art declined once more, because everyone imitated the picture already existing; and so it went from century to century . . .” Leonardo argues that excellence in painting can only be achieved through closely replicating nature, and that returning to the styles, influences, and forms of the masters that came before will produce work of little worth. Throughout the trends in art history we see post-Renaissance, however, many of the movements in art almost appear as both conscious rejections of previous eras as well as concerted efforts to return to them. The neoclassical era of the late 1700s and early 1800s, for example, is characterized as a return to the classical forms of ancient Greece and Rome. And Romanticism, which rose to prominence around the same timeframe, drew focus on the Renaissance-era themes of emotion, nature, and the individual. I believe that this can be traced to the idea that as art forms fluctuate in popularity and prominence, so do the ideals they’re being judged by. Just like the art itself, the values and lenses it's judged with will flow and change along with the evolution of the medium.
          <br></br>
          <br></br>
          Being both a sculptor and a painter, Leonardo is known for having a clear stance on the Paragone, the debate over whether sculpting or painting should be revered as the greater art form. “Since I myself have practiced the art of sculpture no less than that of painting, doing both of them to the same degree, it seems that I, without invidiousness, can give my opinion as to which of the two are more worthy, difficult, and perfect. To begin with, sculpture requires a certain light, while a picture carries with it throughout its own light and shade. The sculptor owes its importance to light and shade, and the sculptor is assisted in this by nature, by the relief which is inherent in it, while the painter whose art expresses the accidental aspects of nature places his effects in the spots where nature would reasonably have put them . . . It may be said that if a mistake is made it is not easy to correct it, but it is a poor argument to try to prove that a piece of work is nobler because oversights are irremediable; I would say rather that it is more difficult to improve the mind of the master who makes such mistakes than to fix the work he has ruined.” While there were no clear or decided winners of the debate, it succeeded in facilitating a massive discussion with some of the greatest minds of one of the most influential times in art history. It helped more clearly define each of these styles and our understanding of them by drawing from the minds of the individuals who developed what we now know is possible with them.  It was with this discussion, and with others like it that came after, that all have worked to further advance the evolution of art and inspire the works of those to come. 
        </p>
      } />
      <RenaissanceLetter text={<p><b>Citation</b><br></br><br></br>Di Vinci, Leonardo. Selections from the Notebooks., p. 185-195</p>} />
      <FlipPage link='/techEvolution'></FlipPage>
      <BackPage link='/'></BackPage>


      <Footer />
    </div>

  )
}
