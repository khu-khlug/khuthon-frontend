"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function AboutLayout({ children }: Props) {
  const path = usePathname();

  return (
    <>
      <div className="navigation">
        <Link
          href="/judge"
          className={classNames({ active: path === "/judge" })}
        >
          대시보드
        </Link>
        <Link
          href="/judge/team"
          className={classNames({ active: path === "/judge/team" }, "ml-2")}
        >
          팀 현황
        </Link>
        <Link
          href="/judge/judging"
          className={classNames({ active: path === "/judge/judging" }, "ml-2")}
        >
          심사
        </Link>
      </div>
      {children}
    </>
  );
}
