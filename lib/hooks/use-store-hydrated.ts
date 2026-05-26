"use client";

import { useEffect, useState } from "react";
import { useFitLogStore } from "@/lib/store/use-fit-log-store";

export function useStoreHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (useFitLogStore.persist.hasHydrated()) {
      setHydrated(true);
      return;
    }

    return useFitLogStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });
  }, []);

  return hydrated;
}
