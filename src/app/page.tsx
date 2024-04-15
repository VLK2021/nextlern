import styles from "./page.module.css";
import dynamic from 'next/dynamic';


const ClientComponent = dynamic(
    () => import('./some-component'),
    {ssr: false}
)


export default function Home() {
    return (
        <main className={styles.main}>
            <h2>React</h2>
            <ClientComponent/>
        </main>
    );
}
