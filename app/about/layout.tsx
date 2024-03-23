"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./about.css";

type Props = {
  children: React.ReactNode;
};

function parseYearFromPath(path: string): number | null {
  const match = path.match(/^\/about(\/(\d{4}))?$/);
  const yearString = match?.[2] ?? null;

  return yearString ? parseInt(yearString, 10) : null;
}

export default function AboutLayout({ children }: Props) {
  const path = usePathname();

  const thisYear = new Date().getFullYear();
  const currentYear = parseYearFromPath(path) ?? thisYear;

  const years = Array.from({ length: thisYear - 2015 }, (_, i) => thisYear - i);

  return (
    <>
      <div className="navigation">
        {years.map((year) => (
          <Link
            key={year}
            href={`/about/${year}`}
            className={classNames({ active: year === currentYear }, "mx-2")}
          >
            {year}
          </Link>
        ))}
      </div>
      {children}
    </>
  );
}
