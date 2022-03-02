import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Question from '../components/Questions/Question';

const Home: NextPage = () => {


  return (
    <div className={styles.container}>
    
      <main className={styles.main}>
        <Question />
      </main>
    </div>
  )
}

export default Home
