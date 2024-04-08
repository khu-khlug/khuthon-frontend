"use client";

import Link from "next/link";
import { Cube } from "../Cube/Cube";
import { NavItem } from "./NavItem";
import { useState } from "react";
import classNames from "classnames";

export function Header() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <div id="header" className="m-0 p-0 b-0 align-baseline">
      <h1 className="logo m-0 p-0 b-0">
        <Link href="/">
          <span className="blind">khuthon</span>
        </Link>
      </h1>

      <Cube
        onClick={() => window.scrollTo({ left: 0, top: 0, behavior: "smooth" })}
      />

      <button
        className="navigation_button border-none cursor-pointer"
        onClick={toggleNav}
      >
        <i></i>
        <i></i>
        <i></i>
      </button>

      <div className={classNames("navigation", { open: navOpen })}>
        <ul className="m-0 p-0 b-0">
          <li>
            <NavItem href="/about">대회 소개</NavItem>
          </li>
          <li>
            <NavItem href="/notice">공지사항</NavItem>
          </li>
          <li>
            <NavItem href="/register">참가 접수</NavItem>
          </li>
          <li>
            <NavItem href="/team">팀 페이지</NavItem>
          </li>
        </ul>
      </div>

      <div className="clear"></div>
    </div>
  );
}
