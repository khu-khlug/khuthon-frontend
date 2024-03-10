"use client";

import Link from "next/link";
import { Cube } from "../Cube/Cube";
import { NavItem } from "./NavItem";

export function Header() {
  return (
    <div id="header">
      <h1 className="logo">
        <Link href="/">
          <span className="blind">khuthon</span>
        </Link>
      </h1>

      <Cube
        onClick={() => window.scrollTo({ left: 0, top: 0, behavior: "smooth" })}
      />

      {/* <a
        href="#"
        className="navigation_button"
        onClick="$('#header .navigation').slideToggle();return false"
      >
        <i></i>
        <i></i>
        <i></i>
      </a> */}

      <div className="navigation">
        <ul>
          <NavItem href="/about">소개</NavItem>
          <NavItem href="/notice">공지</NavItem>
          <NavItem href="/register">참가 접수</NavItem>
          <NavItem href="/team">팀 페이지</NavItem>
        </ul>
      </div>

      <div className="clear"></div>
    </div>
  );
}
