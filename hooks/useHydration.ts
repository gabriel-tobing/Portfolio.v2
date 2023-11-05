import { useEffect, useState } from "react";
import { UseBoundStore } from "zustand";

export const useHydration = (store: UseBoundStore<any>) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const unsubHydrate = store.persist.onHydrate(() => setHydrated(false));

    const unsubFinishHydration = store.persist.onFinishHydration(() => setHydrated(true));

    setHydrated(store.persist.hasHydrated());

    return () => {
      unsubHydrate();
      unsubFinishHydration();
    };
  }, []);

  return hydrated;
};
