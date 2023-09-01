import styles from "../../styles/Player.module.scss"
export default function Player({name}) {
    return <div className={styles["player-frame"]}>
        <h2>{name}</h2>
    </div>
        
}