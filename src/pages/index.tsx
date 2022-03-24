import Head from 'next/head'
import commonStyles from '../styles/common.module.scss'
import styles from './stylesHome.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Almeida | Home</title>
      </Head>
      <h1 className={styles.title}>
        Lucas Diniz Almeida
      </h1>
      <div className={styles.avatar}>
        <span>
          <img src="/skills/javascript.svg" alt="Selo javascript" />
        </span>
        <img src="https://avatars.githubusercontent.com/u/92605557?v=4" alt="Foto pessoal"
        id="picture" />
      </div>
      <img src="/wave.svg" alt="wave" />
      <section className={styles.parentContainer}>
        <main className={commonStyles.container}>
          <div className={`${commonStyles.content} ${styles.myContent}`}>
            <p>
              Full Stack Developer in JavaScript. Especialista em ReactJS com o framework NextJS no front-end, NodeJS do back-end e React Native na parte mobile. Desenvolvo aplicações versáteis, totalmente escaláveis e com uma ótima experiência de usuário para a sua ideia. 
            </p>
            
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
