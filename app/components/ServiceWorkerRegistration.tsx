"use client";

import { useEffect, useState } from "react";

export default function ServiceWorkerRegistration() {
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [swRegistered, setSwRegistered] = useState<boolean>(false);

  useEffect(() => {
    setIsOnline(typeof navigator !== "undefined" ? navigator.onLine : true);

    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Register service worker if supported
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => setSwRegistered(true))
        .catch(() => setSwRegistered(false));
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Minimal, non-intrusive offline banner
  if (isOnline) return null;

  return (
    <div aria-live="polite">
      <div style={{
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        zIndex: 9999,
        background: "#ef4444",
        color: "#fff",
        padding: "8px 12px",
        textAlign: "center",
        fontSize: 14,
      }}>
        You are offline — some features may be unavailable.
      </div>
    </div>
  );
}
