import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Audioplayer} from '../components/Audioplayer'
import Spotify from '../components/spotify'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>openMusic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://toppng.com/uploads/preview/doctor-starnge-circle-png-download-doctor-strange-photo-editing-11562852690dzk4nuhz1i.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
        <main className={styles.main}>
          <Audioplayer />
        </main>
        <div>
          <Spotify />
        </div>
    </div>
  )
}
