import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import Container from "@khlug/components/Container/Container";
import Divider from "@khlug/components/Divider/Divider";
import { GetNotificationResponseDto } from "@khlug/transport/GetNotificationResponseDto";
import { getDateDiffText } from "@khlug/util/getDateDiffText";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useCallback, useEffect, useState } from "react";

type Props = {
  notificationId: string;
  token: string;
};

export default function NotificationContainer({
  notificationId,
  token,
}: Props) {
  const client = useClient();

  const [notification, setNotification] =
    useState<GetNotificationResponseDto | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const getNotification = useCallback(async () => {
    setMessage(null);
    try {
      const response = await client.get(`/notifications/${notificationId}`, {
        params: { token },
      });
      setNotification(response.data);
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  }, [client, notificationId, token]);

  useEffect(() => {
    getNotification();
  }, [getNotification]);

  return (
    <Container>
      {message && <div className="error">{message}</div>}
      {notification && (
        <>
          <div className="py-4">
            <h1 className="!m-0">{notification.summary}</h1>
            <p className="!m-0 !mt-2 text-gray-400">
              {getDateDiffText(new Date(notification.createdAt), new Date())}{" "}
              받음
            </p>
          </div>
          <Divider />
          <div>
            <p className="!mx-0 !m">{notification.content}</p>
          </div>
        </>
      )}
    </Container>
  );
}
