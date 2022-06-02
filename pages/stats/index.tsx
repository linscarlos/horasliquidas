import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import { Header } from '../../src/components/Header'
import { Sidenav } from '../../src/components/Sidenav'
import MainStats from './stats' 

const Home: NextPage = () => {



  return (
      <div className={`${styles.grid} ${styles['grid-template-areas']}`}>
        <Head>
          <title>Estatísticas | Horas Líquidas</title>
          <meta name="description" content="Acompanhe suas estatísticas de estudos no site Horas Líquidas." />
        </Head>

        <Header />
        <Sidenav />
        <MainStats />
        
      </div>
  )
}

export default Home
