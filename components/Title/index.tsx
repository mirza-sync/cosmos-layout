import { ReactNode } from "react";
import styles from "./title.module.scss";

interface TitleProps {
  size: "Medium" | "Large";
  children: ReactNode;
}

export const Title: React.FC<TitleProps> = ({ size, children }) => {
  return (
    <h2 className={`${styles.title} ${styles[`title${size}`]}`}>{children}</h2>
  );
};
