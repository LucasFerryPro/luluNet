/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mon app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Bien le bonjour!
        </h1>

        <div className={styles.grid}>
          <Link href={'/blog/lulu'}>
            <a className={styles.card}>
              <h2>Cooking with Lulu</h2>
              <p>
                Là je répertorie toute mes vidéos de cuisine! 
              </p>
            </a>
          </Link>
          <Link href={'/blog/important'}>
            <a className={styles.card}>
              <h2>Liens importants</h2>
              <p>Retrouvez la les différents lien qui me seront utiles pour faire le site!</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
