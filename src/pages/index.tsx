import { GetStaticProps } from 'next'
import Head from 'next/head'
import commonStyles from '../styles/common.module.scss'
import styles from './stylesHome.module.scss'

interface HomeProps {
  name: string,
  avatar: string,
  description: string
}

export default function Home({ name, avatar, description }: HomeProps) {
  return (
    <>
      <Head>
        <title>Lucas Almeida | Home</title>
      </Head>
      <h1 className={styles.title}>
        {name}
      </h1>
      <div className={styles.avatar}>
        <span>
          <img src="/skills/javascript.svg" alt="Selo javascript" />
        </span>
        <img src={avatar} alt="Foto pessoal"
        id="picture" />
      </div>
      <h2 className={styles.subTitle}>Front end Developer</h2>
      <img 
        src="/wave2.svg" 
        alt="wave" 
        className={styles.waveSvg}
      />
      <section className={styles.parentContainer}>
        <main className={commonStyles.container}>
          <div className={`${commonStyles.content} ${styles.myContent}`}>
            <p>{description}</p>
            
            <h2>
              Contato: <br /> 
              <span>(28)</span>99994-2517
            </h2>
          </div>
        </main>
      </section>
    </>
  )
}


export const getStaticProps: GetStaticProps = async() => {

  const response = await fetch('https://api.github.com/users/lucasDinizAlmeida')
  const data = await response.json()
  
  const usefulData = {
    name: data.name,
    avatar: data.avatar_url,
    description: data.bio
  }

  return{
    props: {
      ...usefulData
    },
    revalidate: 60 * 60 * 24 //1 day
  }
}
