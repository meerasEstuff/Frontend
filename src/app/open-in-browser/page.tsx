"use client";

import { useEffect } from "react";

export default function OpenInBrowser() {
  useEffect(() => {
    const url = "https://meerasestuff.com/"; //
    window.location.href = url;
  }, []);

  return <p>Redirecting...</p>;
}
