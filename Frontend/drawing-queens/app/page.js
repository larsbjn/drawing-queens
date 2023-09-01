import styles from '../styles/Index.module.scss'
import Link from 'next/link';
export default function Page() {
    const playerName = "Lars";
    const roomName = "TestRoom";
    return <>
        <h1 className={styles.title}>Hello, Next.js!</h1>
        <Link href="/room" playerName={playerName} roomName={roomName}>Gå til et rum</Link>
    </>
}