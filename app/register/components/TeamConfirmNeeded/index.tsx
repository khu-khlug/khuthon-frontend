"use client";

import React, { useState } from "react";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";

type Props = {
  teamName: string;
  onSuccess: () => void;
};

export default function TeamConfirmNeeded({ teamName, onSuccess }: Props) {
  const client = useClient();

  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h1 className="text-4xl">인원 확정</h1>
    </div>
  );
}
