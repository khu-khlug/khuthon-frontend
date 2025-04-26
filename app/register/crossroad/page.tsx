"use client";

import React, { useState } from "react";
import { MemberState } from "@khlug/constant";

import { useMemberInfo } from "../hooks/useMemberInfo";
import MemberRegisterForm from "../components/MemberRegisterForm";
import EmailOtpVerifyForm from "../components/EmailOtpVerifyForm";
import CreateTeamForm from "../components/CreateTeamForm";
import RegisterCompleted from "../components/RegisterCompleted";

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

  const renderContent = () => {
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

    if (!memberInfo) {
      return <MemberRegisterForm onSuccess={handleSuccess} />;
    }

    switch (memberInfo.state) {
      case MemberState.NEED_VERIFICATION:
        return (
          <EmailOtpVerifyForm
            email={memberInfo.email}
            onSuccess={handleSuccess}
            onError={handleError}
          />
        );
      case MemberState.NEED_TEAM:
        return (
          <CreateTeamForm onSuccess={handleSuccess} onError={handleError} />
        );
      case MemberState.ACTIVE:
        return <RegisterCompleted />;
    }
  };

  return (
    <div className={styles.pageContainer}>
      {error && (
        <div className={styles.globalError}>
          <p className="text-lg m-0">{error}</p>
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
