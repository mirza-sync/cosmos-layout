import { Logo } from "@/components/Logo";
import { Title } from "@/components/Title";
import styles from "@/styles/home.module.scss";

export default function Home() {
  return (
    <main>
      <section className={`${styles.section} ${styles.sectionMain}`}>
        <header className={styles.header}>
          <Logo />
        </header>
        <Title size="Medium">From dusk to&nbsp;dawn</Title>
      </section>
    </main>
  );
}
