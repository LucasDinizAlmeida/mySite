import styles from './styles.module.scss'


export function TimeLineBox() {
    return(
      <div className={styles.timeLine}>
        <div className={styles.blockLeft}>
          <h3>Renault</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolorem eveniet quo neque reprehenderit, possimus magnam nihil tenetur illum, expedita est consequatur aliquid facere ratione impedit amet quas et temporibus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis illo ipsam quis, amet quibusdam ex aliquam. Atque, voluptatem dolor ea ad cum quae expedita voluptates eligendi architecto voluptatibus nihil mollitia!</p>
        </div>
        <div className={styles.inline}></div>
        <div className={styles.redBlock}>April 2021 - Present</div>
      </div>
    )
  }