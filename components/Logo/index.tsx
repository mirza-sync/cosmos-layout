import Link from "next/link";
import styles from "./logo.module.scss";

export const Logo = () => (
  <Link className={styles.logo} href='/'>Dusktopia</Link>
)