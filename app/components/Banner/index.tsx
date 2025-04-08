"use client";

import { Event } from "@khlug/types/Event";
import styles from "./style.module.css";

type Props = {
  event: Event;
};

export default function Banner({ event }: Props) {
  const eventYear = event.eventStartAt.getFullYear();
  const thisYear = new Date().getFullYear();

  return (
    <div className={styles.banner}>
      경희대학교 소프트웨어 해커톤 khu<b>thon</b>,<br />
      {eventYear === thisYear
        ? event.registerRange === "BETWEEN"
          ? "지금 참가 접수 하세요!"
          : event.registerRange === "AFTER" && event.eventRange === "BEFORE"
          ? "잠시 후에 시작됩니다!"
          : event.eventRange === "BETWEEN"
          ? "모두가 개발에 빠져있습니다!"
          : event.eventRange === "AFTER"
          ? "내년에 또 만나요!"
          : "여러분과 함께 하고 싶습니다!"
        : "여러분과 함께 하고 싶습니다!"}
    </div>
  );
}
