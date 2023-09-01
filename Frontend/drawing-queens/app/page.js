import styles from '../styles/Index.module.scss'
import Link from 'next/link';
export default function Page() {
    return <>
        <h1 className={styles.title}>Hello, Next.js!</h1>
        <Link href="/room">Gå til et rum</Link>
    </>
}