"use client";

import Callout from "@khlug/components/Callout/Callout";
import Container from "@khlug/components/Container/Container";
import EmailVerificationRequestForm from "@khlug/components/register/EmailVerificationRequestForm/EmailVerificationRequestForm";
import { useEvent } from "@khlug/components/EventProvider/EventProvider";

type MockEvent = {
  isLimitExceed: boolean;
};

export default function RegisterPage() {
  const event = useEvent();

  const mockEvent: MockEvent = {
    isLimitExceed: false,
  };

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

      <Container>
        {event.registerRange === "BEFORE" ? (
          <Callout>접수 기간이 아닙니다.</Callout>
        ) : mockEvent.isLimitExceed ? (
          <Callout>접수 인원이 초과되었습니다.</Callout>
        ) : event.registerRange === "AFTER" ? (
          <Callout>접수가 마감되었습니다.</Callout>
        ) : (
          <EmailVerificationRequestForm />
        )}
      </Container>
    </>
  );
}
