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
          <Link href={'/'}>
            <a className={styles.card}>
              <h2>Mon site</h2>
              <p>
                ca c le lien qui va vers mon site
              </p>
            </a>
          </Link>
          <Link href={'/blog/important'}>
            <a className={styles.card}>
              <h2>Important &rarr;</h2>
              <p>Lien vers les autres liens importants</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
