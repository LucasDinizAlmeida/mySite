import styles from './styles.module.scss'

export function Footer() {

  return(
    <footer className={styles.container}>
      <p>
        &copy; Copyright Proprietário do site: <span>Lucas Diniz Almeida</span>
      </p>
    </footer>
  )
}