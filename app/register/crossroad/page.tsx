"use client";

import React, { useState } from "react";
import { MemberState } from "@khlug/constant";
import Link from "next/link";

import { useMemberInfo } from "../hooks/useMemberInfo";
import MemberRegisterForm from "../components/MemberRegisterForm";
import EmailOtpVerifyForm from "../components/EmailOtpVerifyForm";
import CreateTeamForm from "../components/CreateTeamForm";

import styles from "./style.module.css";

export default function RegisterCrossroadPage() {
  const [memberInfo, reloadMemberInfo, loadError] = useMemberInfo();
  const [error, setError] = useState<string | null>(null);

  const handleSuccess = () => {
    reloadMemberInfo();
    setError(null);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
  };

  // 완료된 회원 상태일 때 보여줄 컴포넌트
  const renderCompletedState = () => (
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

  // 회원 상태에 따라 적절한 컴포넌트 렌더링
  const renderContent = () => {
    // 로딩 중인 경우
    if (loadError) {
      return (
        <div className={styles.container}>
          <div className={styles.errorCard}>
            <p className={styles.errorMessage}>
              회원 정보를 불러오는 중 오류가 발생했습니다.
            </p>
            <p className={styles.errorDetail}>{loadError}</p>
            <button
              className={styles.retryButton}
              onClick={() => reloadMemberInfo()}
            >
              다시 시도
            </button>
          </div>
        </div>
      );
    }

    // 회원 정보가 없는 경우 (로그인 안 한 상태)
    if (!memberInfo) {
      return (
        <div className={styles.formWrapper}>
          <MemberRegisterForm onSuccess={handleSuccess} onError={handleError} />
        </div>
      );
    }

    // 회원 상태에 따라 다른 컴포넌트 렌더링
    switch (memberInfo.state) {
      case MemberState.NEED_VERIFICATION:
        return (
          <div className={styles.formWrapper}>
            <EmailOtpVerifyForm
              email={memberInfo.email}
              onSuccess={handleSuccess}
              onError={handleError}
            />
          </div>
        );
      case MemberState.NEED_TEAM:
        return (
          <div className={styles.formWrapper}>
            <CreateTeamForm onSuccess={handleSuccess} onError={handleError} />
          </div>
        );
      case MemberState.ACTIVE:
        return renderCompletedState();
      default:
        return (
          <div className={styles.container}>
            <div className={styles.errorCard}>
              <p className={styles.errorMessage}>알 수 없는 회원 상태입니다.</p>
              <button
                className={styles.retryButton}
                onClick={() => reloadMemberInfo()}
              >
                새로고침
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={styles.pageContainer}>
      {error && (
        <div className={styles.globalError}>
          <p>{error}</p>
          <button
            className={styles.closeErrorButton}
            onClick={() => setError(null)}
          >
            ×
          </button>
        </div>
      )}

      {renderContent()}
    </div>
  );
}
