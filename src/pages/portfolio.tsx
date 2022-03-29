import { TimeLineBox } from '../components/TimeLineBox'
import commonStyles from '../styles/common.module.scss'
import styles from './stylesPortfolio.module.scss'

export default function Portfolio() {
  return(
    <main className={commonStyles.container}>
      <div className={`${commonStyles.content}`}>
      
        <TimeLineBox />
        <TimeLineBox />
        <TimeLineBox />
      </div>
    </main>
  )
}