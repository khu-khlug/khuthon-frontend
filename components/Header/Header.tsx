"use client";

import classNames from "classnames";
import { usePathname } from "next/navigation";
import { Cube } from "../Cube/Cube";

export function Header() {
  const path = usePathname();

  return (
    <div id="header">
      <h1 className="logo">
        <a href="{{url('/')}}">
          <span className="blind">khuthon</span>
        </a>
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
          <li>
            <a
              href="{{url('/about')}}"
              className={classNames({ active: path === "/about" })}
            >
              해커톤 소개
            </a>
          </li>
          <li>
            <a
              href="{{url('/notice')}}"
              className={classNames({ active: path === "/forum" })}
            >
              포럼
            </a>
          </li>
          <li>
            <a
              href="{{url('/register')}}"
              className={classNames({ active: path === "/register" })}
            >
              참가 접수
            </a>
          </li>
          <li>
            <a
              href="{{url('/page')}}"
              className={classNames({ active: path === "/page" })}
            >
              팀 페이지
            </a>
          </li>
        </ul>
      </div>

      <div className="clear"></div>
    </div>
  );
}
