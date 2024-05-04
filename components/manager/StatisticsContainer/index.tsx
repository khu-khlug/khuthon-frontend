"use client";

import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import Container from "@khlug/components/Container/Container";
import { StatisticsResponseDto } from "@khlug/transport/StatisticsResponseDto";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useCallback, useEffect, useState } from "react";
import TotalCounter from "../TotalCounter";
import MemberStateStatisticsList from "../MemberStateStatisticsList";

export default function StatisticsContainer() {
  const client = useClient();

  const [statistics, setStatistics] = useState<StatisticsResponseDto | null>(
    null
  );
  const [message, setMessage] = useState<string | null>(null);

  const getStatistics = useCallback(async () => {
    try {
      const response = await client.get("/manager/members/statistics");
      setStatistics(response.data);
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  }, [client]);

  useEffect(() => {
    getStatistics();
  }, [getStatistics]);

  return (
    <Container>
      {message && <div className="error">{message}</div>}
      {statistics && (
        <>
          <TotalCounter statistics={statistics} />
          <MemberStateStatisticsList statistics={statistics} />
        </>
      )}
    </Container>
  );
}
