import styles from "./Callout.module.css";

type CalloutProps = {
  children: React.ReactNode;
};

export default function Callout({ children }: CalloutProps) {
  return <div className={styles.callout}>{children}</div>;
}
