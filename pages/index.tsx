import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Header } from '../src/components/Header'
import { Main } from '../src/components/Main'
import { Sidenav } from '../src/components/Sidenav'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Horas Liquídas</title>
        <meta name="description" content="Cronômetro de horas liquídas de estudos, site que marcar as horas que o estudante está devidamente focado, aprendendo." />
      </Head>

      <div className={`${styles.grid} ${styles['grid-template-areas']}`}>
        <Header />
        <Sidenav />
        <Main />
      </div>
    </>
  )
}

export default Home
