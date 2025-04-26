import Link from "next/link";
import styles from "./style.module.css";

export default function RegisterCompleted() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>접수 완료</h1>
      <div className={styles.completedCard}>
        <div className={styles.completedIcon}>✓</div>
        <p className={styles.completedMessage}>
          회원 접수가 모두 완료되었습니다!
        </p>
        <p className={styles.description}>
          팀 관리는{" "}
          <Link href="/team" className={styles.link}>
            팀 페이지
          </Link>
          에서 할 수 있습니다.
        </p>
        <p className={styles.description}>대회 당일에 뵙겠습니다!</p>
      </div>
    </div>
  );
}
