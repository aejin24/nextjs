"use client";

import { useSession } from "next-auth/react";

export default function Index() {
  const { status, data } = useSession();

  return (
    <>
      <h1>status: {status}</h1>
      <h1>session data: {JSON.stringify(data)}</h1>
    </>
  );
}
