"use client";

import { Callout } from "@khlug/components/Callout/Callout";
import classNames from "classnames";
import { useState } from "react";

type RangeType = "BEFORE" | "BETWEEN" | "AFTER";
type MockEvent = {
  registerRange: RangeType;
  eventRange: RangeType;
  isLimitExceed: boolean;
};

export default function RegisterPage() {
  const mockEvent: MockEvent = {
    registerRange: "BEFORE",
    eventRange: "BEFORE",
    isLimitExceed: false,
  };

  const initialTab = mockEvent?.registerRange === "AFTER" ? 1 : 0;
  const [currentTab, setCurrentTab] = useState(0);
  const [message, setMessage] = useState<string | null>(null);

  return (
    <>
      <div className="container">
        <h4>팀 참가자 접수 절차</h4>
        <div className="flow_diagram c3">
          <div className="cell">
            <div className="cell_wrap">
              <div className="date">접수 기간 중</div>
              <div className="event">
                <div className="event_wrap">
                  팀 등록<sup>*0 *1</sup>
                </div>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="cell_wrap">
              <div className="date">접수 기간 중</div>
              <div className="event">
                <div className="event_wrap">
                  팀원 참가 확인<sup>*0 *2 *3</sup>
                </div>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="cell_wrap">
              <div className="date">접수 기간 중</div>
              <div className="event">
                <div className="event_wrap">
                  참가 접수 완료<sup>*3</sup>
                </div>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
        <p className="sup">
          <span className="sup">*0</span>{" "}
          <a href="https://jajudy.khu.ac.kr/stuauth" target="_blank">
            중앙동아리연합회 전산 학생 인증 시스템
          </a>
          을 통해 학부생 인증을 합니다.
          <br />
        </p>
        <p className="sup">
          <span className="sup">*1</span> 팀원 모두가 재학생이어야 합니다.
          <br />
          팀원은 최소 1명에서 최대 4명까지 등록할 수 있습니다.
        </p>
        <p className="sup">
          <span className="sup">*2</span> 각 팀원은 하단의 [참가 확인] 메뉴에서
          참가자 확인을 해야합니다.
          <br />
          접수가 마감될 때까지 팀원 중 한 명이라도 신원 확인이 되지 않으면 참가
          등록이 취소됩니다.
        </p>
        <p className="sup">
          <span className="sup">*3</span> 신원 확인 당시 종합정보시스템에 등록된
          핸드폰 번호로 문자가 전송됩니다.
        </p>
      </div>

      <div id="tab" className="tab c2">
        <div className="cell">
          <a className={classNames({ active: currentTab === 0 })} id="tab1">
            팀 참가자 등록
          </a>
        </div>
        <div className="cell">
          <a className={classNames({ active: currentTab === 1 })} id="tab2">
            참가 확인
          </a>
        </div>
        <div className="clear"></div>
      </div>

      <div
        id="team_register"
        style={{ marginTop: 0 }}
        className={classNames("container", {
          hidden: currentTab !== 0,
        })}
      >
        {!mockEvent || mockEvent.registerRange === "BEFORE" ? (
          <Callout>접수 기간이 아닙니다.</Callout>
        ) : mockEvent.isLimitExceed ? (
          <div className="complete m-2.5 -mb-2.5">
            접수 인원이 초과되었습니다.
          </div>
        ) : mockEvent.registerRange === "AFTER" ? (
          <div className="complete m-2.5 -mb-2.5">접수가 마감되었습니다.</div>
        ) : (
          <form method="post" action="/register/team">
            {message && <div className="error">{message}</div>}

            <label>참가자 확인</label>
            <div className="description">
              인포21 종합정보시스템 인증을 통해 학번, 이름, 소속(학과),
              연락처(전화번호) 정보가 자동으로 입력됩니다.
              <br />
              등록하는 팀원은 반드시 재학생이어야 합니다.
            </div>
            <div className="input_wrap">
              <input
                type="text"
                name="id"
                value="{{old('id')}}"
                placeholder="인포21 아이디"
                required
              />
            </div>
            <div className="input_wrap">
              <input
                type="password"
                name="password"
                value=""
                placeholder="인포21 비밀번호"
                required
              />
            </div>

            <label>참가자 학년</label>
            <div className="description">
              참가자 본인의 학년을 정확하게 입력해주세요. 잘못된 정보를 입력했을
              때 발생하는 모든 불이익은 쿠러그에서 책임지지 않습니다.
            </div>
            <div className="input_wrap">
              <input
                type="number"
                name="grade"
                value="{{old('grade')}}"
                placeholder="학년"
                required
              />
            </div>

            <label>팀 이름</label>
            <div className="input_wrap">
              <input type="text" name="name" value="{{old('name')}}" required />
            </div>

            <div className="btnArea">
              <button type="submit" className="black w-full">
                <span className="text-lg p-4">등록하기</span>
              </button>
            </div>
          </form>
        )}
      </div>

      <div
        id="member_check"
        style={{ marginTop: 0 }}
        className={classNames("container", {
          hidden: currentTab !== 1,
        })}
      >
        {!mockEvent || mockEvent.registerRange === "BEFORE" ? (
          <div className="complete m-2.5 -mb-2.5">접수 기간이 아닙니다.</div>
        ) : mockEvent.eventRange !== "AFTER" ? (
          <form method="post" action="/member">
            <p className="mt-6 mb-2.5 mx-0">
              인포21 종합정보시스템을 통해 경희대학교 학부생임을 확인하고 참가
              정보를 입력합니다.
              <br />
              해커톤 진행을 위해 이름, 학과, 학적과 연락처(전화번호)가
              수집됩니다.
              <br />
              인포21 비밀번호는 저장되지 않습니다.
            </p>
            <label>참가자 확인</label>
            <div className="input_wrap">
              <input
                type="text"
                name="id"
                value="{{old('id')}}"
                placeholder="인포21 아이디"
                required
              />
            </div>
            <div className="input_wrap">
              <input
                type="password"
                name="password"
                value=""
                placeholder="인포21 비밀번호"
                required
              />
            </div>
            <label>참가자 학년</label>
            <div className="description">
              참가자 본인의 학년을 정확하게 입력해주세요. 잘못된 정보를 입력했을
              때 발생하는 모든 불이익은 쿠러그에서 책임지지 않습니다.
            </div>
            <div className="input_wrap">
              <input
                type="number"
                name="grade"
                value="{{old('grade')}}"
                placeholder="학년"
                required
              />
            </div>
            <div className="btnArea">
              <button type="submit" className="black w-full">
                <span className="p-4 text-lg">확인하기</span>
              </button>
              <div className="description">
                접수 마감 전까지 개인정보를 갱신하거나 참가 신청을 철회할 수
                있습니다.
              </div>
            </div>
          </form>
        ) : (
          <div className="complete mt-2.5">행사 기간이 아닙니다.</div>
        )}
      </div>
    </>
  );
}
