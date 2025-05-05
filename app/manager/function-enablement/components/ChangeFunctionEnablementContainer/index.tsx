"use client";

import { Fragment, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import Container from "@khlug/components/Container/Container";
import Subtitle from "@khlug/components/Title/Subtitle";
import { GetManagerConfigsResponseDto } from "@khlug/transport/GetManagerConfigsResponseDto";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import Button from "@khlug/components/Button";
import Divider from "@khlug/components/Divider/Divider";

const ConfigLabelMap: Record<string, string> = {
  voteEnabled: "투표",
  judgeEnabled: "심사",
  ideaEditEnabled: "팀 아이디어 변경",
  attachmentEditEnabled: "발표 자료 추가 / 변경 / 삭제",
  productUrlEditEnabled: "작품 URL 변경",
};

export default function ChangeFunctionEnablementContainer() {
  const client = useClient();

  const [configs, setConfigs] = useState<GetManagerConfigsResponseDto | null>(
    null
  );

  const loadConfigs = useCallback(async () => {
    try {
      const response = await client.get<GetManagerConfigsResponseDto>(
        "/manager-configs"
      );
      setConfigs(response.data);
    } catch (e) {
      toast.error(extractErrorMessage(e));
    }
  }, [client]);

  const changeConfig = async (key: string, value: boolean) => {
    try {
      await client.put(`/manager/config`, { key, value });
      toast.success("변경되었습니다.");
      loadConfigs();
    } catch (e) {
      toast.error(extractErrorMessage(e));
    }
  };

  useEffect(() => {
    loadConfigs();
  }, [loadConfigs]);

  return (
    <Container>
      <Subtitle>기능 제어</Subtitle>
      <p>대회 내 기능의 활성화 여부를 제어합니다.</p>
      {configs && (
        <>
          {Object.entries(configs).map(([key, value]) => (
            <Fragment key={key}>
              <Divider />
              <div className="flex items-center justify-between gap-2 m-2">
                <span className="text-lg m-0">{ConfigLabelMap[key]}</span>
                <div>
                  <Button
                    onClick={() => changeConfig(key, true)}
                    disabled={!!value}
                  >
                    활성화
                  </Button>
                  <Button
                    className="ml-2"
                    onClick={() => changeConfig(key, false)}
                    disabled={!value}
                  >
                    비활성화
                  </Button>
                </div>
              </div>
            </Fragment>
          ))}
        </>
      )}
    </Container>
  );
}
