"use client";

import { useRouter } from "next/navigation";

export default () => {
  const router = useRouter();
  router.push("/app/dashboard");
  return null;
};
