import styles from '../../styles/Player.module.scss'
import styles1 from '../../styles/Index.module.scss'
import Player from './player'

export default function Page() {
    return <>
        <h1 className={styles1['title']}>Hello, room!</h1>
        <Player name="Lars" />
        <Player name="Camilla" />
    </>
}