"use client";

import { useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Callout from "@khlug/components/Callout/Callout";
import KhuthonText from "@khlug/components/KhuthonText";
import { useEvent } from "@khlug/components/EventProvider/EventProvider";

import StepNumber from "./components/StepNumber";

import styles from "./style.module.css";
import { useToken } from "@khlug/components/ClientProvider/ClientProvider";

export default function NewRegisterPage() {
  const router = useRouter();
  const event = useEvent();
  const loginSectionRef = useRef<HTMLDivElement>(null);
  const [, setToken] = useToken();

  const moveToBottom = () => {
    loginSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleStart = () => {
    setToken(null);
    router.push("/register/crossroad");
  };

  const handleContinue = () => {
    router.push("/register/login");
  };

  return (
    <div className={classNames("max-w-3xl px-4 py-8 m-auto", styles.container)}>
      <h1 className="text-4xl">참가 접수 안내</h1>
      <section>
        <p>
          <KhuthonText />에 오신 여러분을 환영합니다!
        </p>
        <p>
          참여 접수를 위해 필요한 절차에 대해서 안내해드릴게요. 잘 읽어보시고,
          순서대로 진행해주세요.
          <br />
          <span className="text-base text-gray-400 italic">
            아래 설명은 접수를 진행하는 중에도 확인할 수 있어요!
            <br />
            만약 이미 절차를 진행하던 중이거나, 현재 접수 상태를 확인하고 싶다면{" "}
            <a className="cursor-pointer" onClick={moveToBottom}>
              아래에서
            </a>{" "}
            로그인해주세요!
          </span>
        </p>
        <p>
          혹시 절차를 진행하는 중에 모르는 부분이 있거나 진행에 막히는 점이
          있다면, <strong>우측 하단의 채팅 버튼</strong>을 눌러 문의해주세요.
          운영진이 빠르게 답변해드릴게요.
        </p>
      </section>
      <section className="mt-12">
        <div>
          <p>
            <StepNumber step={1} />
            <span className="ml-2 text-2xl font-semibold">
              참가자 정보 입력
            </span>
          </p>
          <p>먼저, 참가자의 정보를 입력 받아요.</p>
          <ol className="list-decimal">
            <li>학번</li>
            <li>이름</li>
            <li>전화번호</li>
            <li>학교 이메일 주소</li>
            <li>비밀번호</li>
          </ol>
          <p>
            입력한 정보를 기반으로 팀 참가와 연락이 이루어지기 때문에, 정확히
            입력해주세요.
          </p>
        </div>
        <div className="mt-8">
          <p>
            <StepNumber step={2} />
            <span className="ml-2 text-2xl font-semibold">이메일 인증</span>
          </p>
          <p>
            1번에서 입력한 이메일 주소로 전송된 인증 코드를 입력해서 인증해요.
            이 단계를 통해 입력한 이메일 주소가 본인 것인지 확인하고, 재학 중인
            학교를 판단해요.
          </p>
        </div>
        <div className="mt-8">
          <p>
            <StepNumber step={3} />
            <span className="ml-2 text-2xl font-semibold">팀 참가</span>
          </p>
          <p>팀에 참가하는 방법은 두 가지가 있어요.</p>
          <ol className="list-decimal">
            <li>
              팀 생성하기: 팀을 생성한 후, <Link href="/team">팀 페이지</Link>
              에서 팀원들의 <strong>학번</strong>을 입력하여 팀원들을 초대할 수
              있어요.
            </li>
            <li>
              초대 기다리기: 이 단계에서 팀을 생성하지 않고, 팀원이 초대해줄
              때까지 기다려요.
            </li>
          </ol>
          <p>팀 생성 시, 아래 사항을 참고해주세요.</p>
          <ul className="list-disc">
            <li>
              팀원은 같은 학교 재학생만 가능하며, 다른 대학 간 팀을 구성할 수는
              없어요.
            </li>
            <li>
              1인 팀으로 참가하시는 것이라면, 팀 생성 후 바로 4번 단계로
              넘어가면 돼요.
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <p>
            <StepNumber step={4} />
            <span className="ml-2 text-2xl font-semibold">인원 확정</span>
          </p>
          <p>
            인원 확정을 진행해야 대회 접수가 완료돼요. 인원 확정은{" "}
            <Link href="/team">팀 페이지</Link>에서 할 수 있어요.
          </p>
          <ul className="list-disc">
            <li>
              팀장 구분이 없기 때문에, 인원 확정은 팀원 중 한 명이 진행하면
              돼요.
            </li>
            <li>팀원 모두가 3번 단계까지 진행해야 인원 확정이 가능해요.</li>
            <li>한 번 인원 확정이 되면 팀원을 변경할 수 없어요.</li>
            <li>
              인원 확정 진행 시점에 이미 최대 인원 또는 최대 팀 수를 초과했다면
              대회에 참가할 수 없어요.
            </li>
            <li className="text-red-500">
              인원 확정을 진행하지 않으면 대회 참가가 불가능해요.
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <p>
            <StepNumber step={5} />
            <span className="ml-2 text-2xl font-semibold">완료!</span>
          </p>
          <p>이제 대회에 참가할 수 있어요. 당일에 뵙겠습니다!</p>
        </div>
      </section>
      <h1 className="text-4xl mt-20">참가 접수</h1>
      <section ref={loginSectionRef}>
        {event.registerRange === "BEFORE" ? (
          <Callout>접수 기간이 아닙니다.</Callout>
        ) : event.registerRange === "AFTER" ? (
          <Callout>접수가 마감되었습니다.</Callout>
        ) : (
          <div className={styles["register-buttons"]}>
            <button onClick={handleStart}>
              접수가 처음이라면 처음부터,
              <br />
              <span>시작하기</span>
            </button>
            <button onClick={handleContinue}>
              이미 접수 절차를 진행 중이라면,
              <br />
              <span>이어하기</span>
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
