/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mon app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Cooking with Lulu !
        </h1>

        <div className={styles.grid}>
            <h2>CroustiFromage (raté)<br></br></h2>
            <ReactPlayer url='https://youtu.be/vFeGWLloG9g'controls className={styles.reactPlayer}/>
            <p><br></br>Première vidéo pour ma petite lulu, oui je sais le ruban bleu en plein milieu est pas beau mais j'avais que ça...</p>
          <Link href={'/'}>
            <a className={styles.card}>
              <h2>Retour</h2>
              <p>Retour a l'accueil</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
