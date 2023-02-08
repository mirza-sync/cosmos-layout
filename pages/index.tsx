import { Logo } from '@/components/Logo'
import styles from '@/styles/home.module.scss'

export default function Home() {
  return (
    <main>
      <section className={`${styles.section} ${styles.sectionMain}`}>
        <header className={styles.header}>
          <Logo />
        </header>
        <h1>From dust to&nbsp;dawn</h1>
      </section>
    </main>
  )
}
