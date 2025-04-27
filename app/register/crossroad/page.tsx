"use client";

import { MemberState } from "@khlug/constant";

import { useMemberInfo } from "../hooks/useMemberInfo";
import MemberRegisterForm from "../components/MemberRegisterForm";
import EmailOtpVerifyForm from "../components/EmailOtpVerifyForm";
import CreateTeamForm from "../components/CreateTeamForm";
import RegisterCompleted from "../components/RegisterCompleted";

import styles from "./style.module.css";
import TeamConfirmNeeded from "../components/TeamConfirmNeeded";

export default function RegisterCrossroadPage() {
  const [memberInfo, reloadMemberInfo, loadError] = useMemberInfo();

  const handleSuccess = () => {
    reloadMemberInfo();
  };

  return (
    <div className={styles.pageContainer}>
      {(() => {
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
            return <EmailOtpVerifyForm onSuccess={handleSuccess} />;
          case MemberState.NEED_TEAM:
            return <CreateTeamForm onSuccess={handleSuccess} />;
          case MemberState.ACTIVE:
            const team = memberInfo.team!;
            return team.confirmed ? (
              <RegisterCompleted />
            ) : (
              <TeamConfirmNeeded onSuccess={handleSuccess} />
            );
        }
      })()}
    </div>
  );
}
