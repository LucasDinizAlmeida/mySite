import styles from './styles.module.scss'

export function Skills() {

  return(
    <div className={styles.container}>
      <ul>
        <li>
          <img src="/skills/javascript.svg" alt="logo javascript" />
        </li>
        <li>
          <img src="/skills/react.svg" alt="logo react" />
        </li>
        <li>
          <img src="/skills/nodejs.svg" alt="logo nodejs" />
        </li>
        <li>
          <img src="/skills/sass.svg" alt="logo sass" />
        </li>
        <li>
          <img src="/skills/typescript.svg" alt="logo typescript" />
        </li>
      </ul>
    </div>
  )
}