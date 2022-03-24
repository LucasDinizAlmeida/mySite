import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './styles.module.scss'
import Link from 'next/link'
import { ActiveLink } from '../ActiveLink'

export function Header() {

  return(
    <header>
      <main className={styles.container}>
        <div className={styles.content}>
          <div>
            <a href="https://github.com/LucasDinizAlmeida" 
              target="_blank"
              className={styles.icons}
            >
              <FaGithub fontSize={30}/>
            </a>
            <a href="https://www.instagram.com/lucas_diniz_almeida/" 
              className={styles.icons}
              target="_blank"
            >
              <FaInstagram fontSize={30}/>
            </a>
            <a href="https://www.linkedin.com/in/lucas-diniz-almeida-642037233/" 
              className={styles.icons}
              target="_blank"
            >
              <FaLinkedin fontSize={30}/>
            </a> 
          </div>
          <nav>
            <ActiveLink 
              href="/"
              activeClassName={styles.isActive}
            >
              <a>Home</a>
            </ActiveLink>
            <ActiveLink 
              href="/portfolio"
              activeClassName={styles.isActive}
            >
              <a>Portfólio</a>
            </ActiveLink>
          </nav>
        </div>
      </main>
    </header>
  )
}