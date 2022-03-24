import Head from "next/head";
import commonStyles from '../styles/common.module.scss'
export default function Portfolio() {

  return(
    <>
      <Head>
        <title>Lucas Almeida | Portfolio</title>
      </Head>
      <main className={commonStyles.container}>
        <div className={commonStyles.content}>
          <h1>Portfolio</h1>
        </div>
      </main>
    </>
    
  )
}