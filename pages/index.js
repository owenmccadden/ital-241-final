import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navigation from '@/components/Navigation'
import RenaissanceLetter from '@/components/RenaissanceLetter'
import Footer from '@/components/Footer'


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
        className={styles['art-gallery__image']}
      />
      <h3 className={styles.writingTitle}>Evolution of Art</h3>
      <RenaissanceLetter text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ipsum dapibus, lacinia nulla a, auctor purus. Curabitur et elit urna. Suspendisse dignissim nunc ornare tincidunt dapibus. Phasellus ultrices ligula et nisl mattis molestie. Praesent metus tortor, maximus et posuere sit amet, vehicula vel nunc. Aenean scelerisque nulla nunc, et congue nunc mattis sit amet. Donec sit amet auctor velit, quis posuere lectus. Suspendisse convallis elementum tortor, vel tempor sapien viverra tristique. Fusce eleifend augue at magna luctus bibendum. Nam sagittis eros eget neque egestas eleifend. Vivamus convallis malesuada tellus, in hendrerit massa aliquet suscipit. Curabitur commodo ante volutpat lobortis sagittis. Aliquam efficitur cursus purus, id euismod quam semper eu. Integer id nisl purus.

Sed luctus aliquam ullamcorper. In eu tellus fermentum, accumsan orci a, lacinia leo. In sed nisl sed nunc sollicitudin imperdiet vel eleifend eros. Etiam ut urna et lorem pellentesque iaculis auctor nec tellus. Quisque porttitor vitae est quis interdum. Morbi eleifend libero cursus nisl tempor consequat. In non purus in lectus tempus vestibulum.

Nullam scelerisque, nibh quis pulvinar pharetra, diam enim porttitor erat, id luctus enim justo id odio. Aliquam nulla massa, elementum vitae vehicula vel, eleifend in augue. Etiam congue neque at maximus tristique. Pellentesque felis mauris, sagittis id nunc ut, facilisis finibus quam. Integer feugiat varius metus et pellentesque. Proin sed euismod mauris. In lobortis sagittis nunc in sodales. Phasellus ultrices placerat lectus, at ultrices dui accumsan a.

Sed et quam lobortis, ullamcorper neque in, vulputate dui. Cras nisl mi, egestas vehicula venenatis et, malesuada a nibh. Mauris aliquam, tellus eu cursus rhoncus, justo nisi vestibulum nisl, vitae molestie nibh nulla id ligula. Maecenas a velit nulla. Sed tempor quam sed elit maximus mattis. Phasellus eget diam commodo, dictum est tempus, ullamcorper metus. Proin convallis nisi id dictum venenatis. Mauris sed est ante. Nullam ultrices dolor ut bibendum scelerisque. Phasellus ligula nisi, ullamcorper non dolor in, maximus dictum lacus. Maecenas suscipit laoreet bibendum. Suspendisse efficitur libero in lobortis consequat. Curabitur elementum fermentum elementum. Suspendisse in felis imperdiet, rutrum risus nec, mattis lacus. Aliquam sit amet ante rutrum, efficitur ante ut, ultricies ipsum.

Nunc lobortis condimentum orci eu mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin consequat ullamcorper elit ac convallis. Etiam sed euismod ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu lectus in tellus auctor malesuada nec ut purus. Nulla bibendum nibh a lectus molestie tristique. Donec blandit massa at dignissim molestie. Nulla id rhoncus ex, in congue neque. Suspendisse a euismod quam. Mauris mollis aliquam vulputate. Aliquam dictum erat non pretium condimentum. Nunc rhoncus ac mauris non rutrum." />

      <h3 className={styles.writingTitle}>Evolution of Technology</h3>

      <RenaissanceLetter text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ipsum dapibus, lacinia nulla a, auctor purus. Curabitur et elit urna. Suspendisse dignissim nunc ornare tincidunt dapibus. Phasellus ultrices ligula et nisl mattis molestie. Praesent metus tortor, maximus et posuere sit amet, vehicula vel nunc. Aenean scelerisque nulla nunc, et congue nunc mattis sit amet. Donec sit amet auctor velit, quis posuere lectus. Suspendisse convallis elementum tortor, vel tempor sapien viverra tristique. Fusce eleifend augue at magna luctus bibendum. Nam sagittis eros eget neque egestas eleifend. Vivamus convallis malesuada tellus, in hendrerit massa aliquet suscipit. Curabitur commodo ante volutpat lobortis sagittis. Aliquam efficitur cursus purus, id euismod quam semper eu. Integer id nisl purus.

Sed luctus aliquam ullamcorper. In eu tellus fermentum, accumsan orci a, lacinia leo. In sed nisl sed nunc sollicitudin imperdiet vel eleifend eros. Etiam ut urna et lorem pellentesque iaculis auctor nec tellus. Quisque porttitor vitae est quis interdum. Morbi eleifend libero cursus nisl tempor consequat. In non purus in lectus tempus vestibulum.

Nullam scelerisque, nibh quis pulvinar pharetra, diam enim porttitor erat, id luctus enim justo id odio. Aliquam nulla massa, elementum vitae vehicula vel, eleifend in augue. Etiam congue neque at maximus tristique. Pellentesque felis mauris, sagittis id nunc ut, facilisis finibus quam. Integer feugiat varius metus et pellentesque. Proin sed euismod mauris. In lobortis sagittis nunc in sodales. Phasellus ultrices placerat lectus, at ultrices dui accumsan a.

Sed et quam lobortis, ullamcorper neque in, vulputate dui. Cras nisl mi, egestas vehicula venenatis et, malesuada a nibh. Mauris aliquam, tellus eu cursus rhoncus, justo nisi vestibulum nisl, vitae molestie nibh nulla id ligula. Maecenas a velit nulla. Sed tempor quam sed elit maximus mattis. Phasellus eget diam commodo, dictum est tempus, ullamcorper metus. Proin convallis nisi id dictum venenatis. Mauris sed est ante. Nullam ultrices dolor ut bibendum scelerisque. Phasellus ligula nisi, ullamcorper non dolor in, maximus dictum lacus. Maecenas suscipit laoreet bibendum. Suspendisse efficitur libero in lobortis consequat. Curabitur elementum fermentum elementum. Suspendisse in felis imperdiet, rutrum risus nec, mattis lacus. Aliquam sit amet ante rutrum, efficitur ante ut, ultricies ipsum.

Nunc lobortis condimentum orci eu mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin consequat ullamcorper elit ac convallis. Etiam sed euismod ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu lectus in tellus auctor malesuada nec ut purus. Nulla bibendum nibh a lectus molestie tristique. Donec blandit massa at dignissim molestie. Nulla id rhoncus ex, in congue neque. Suspendisse a euismod quam. Mauris mollis aliquam vulputate. Aliquam dictum erat non pretium condimentum. Nunc rhoncus ac mauris non rutrum." />


      <Footer />
    </div>

  )
}
