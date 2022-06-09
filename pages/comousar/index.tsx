import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import { Header } from '../../src/components/Header'
import { Sidenav } from '../../src/components/Sidenav'
import MainComoUsar from './comousar'

const Home: NextPage = () => {

  return (
      <div className={`${styles.grid} ${styles['grid-template-areas']}`}>
        <Head>
          <title>Como Usar o Horas Liquidas?</title>
          <meta name="description" content="Aprenda como utilizar o site horas liquidas." />
        </Head>

        <Header />
        <Sidenav />
        <MainComoUsar />
        
      </div>
  )
}

export default Home
