"use client";

import React, { useState } from "react";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import Button from "@khlug/components/Button";
import FancyInput from "../FancyInput";
import Link from "next/link";

import styles from "./style.module.css";

interface CreateTeamFormProps {
  onSuccess: () => void;
  onError: (error: string) => void;
}

export default function CreateTeamForm({
  onSuccess,
  onError,
}: CreateTeamFormProps) {
  const client = useClient();

  const [teamName, setTeamName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!teamName.trim()) {
      setError("팀 이름을 입력해주세요");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await client.post("/teams", { teamName });
      onSuccess();
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "팀 생성에 실패했습니다";
      setError(errorMessage);
      onError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>팀 참가</h1>

      <p className={styles.description}>
        팀에 참가하는 방법은 두 가지가 있습니다:
      </p>

      <ol className={styles.optionList}>
        <li>
          <strong>팀 생성하기</strong>: 아래 폼을 작성하여 팀을 직접 생성합니다.
          생성 후 <Link href="/team">팀 페이지</Link>에서 팀원을 초대할 수
          있습니다.
        </li>
        <li>
          <strong>초대 기다리기</strong>: 팀원이 초대해줄 때까지 기다립니다. 이
          경우 별도 조치가 필요하지 않습니다.
        </li>
      </ol>

      <div className={styles.divider}>
        <span>팀 생성하기</span>
      </div>

      {error && <div className={styles.errorAlert}>{error}</div>}

      <form className={styles.form} onSubmit={handleSubmit}>
        <FancyInput
          label="팀 이름"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="팀 이름을 입력하세요"
        />

        <Button className={styles.submitButton} loading={loading} formSubmit>
          팀 생성하기
        </Button>
      </form>

      <p className={styles.note}>
        * 팀 생성 후 인원 확정까지 진행해야 접수가 완료됩니다. 인원 확정은{" "}
        <Link href="/team">팀 페이지</Link>에서 할 수 있습니다.
      </p>
    </div>
  );
}
