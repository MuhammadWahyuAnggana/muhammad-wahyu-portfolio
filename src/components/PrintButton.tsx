"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  const handlePrint = async () => {
    const sources = [
      "/images/profile.png",
      "/images/arsip-pdam.png",
      "/images/jagadhita.png",
    ];

    await Promise.all(
      sources.map(
        (src) =>
          new Promise<void>((resolve) => {
            const image = new window.Image();
            image.onload = () => resolve();
            image.onerror = () => resolve();
            image.src = src;
            if (image.complete) resolve();
          }),
      ),
    );

    requestAnimationFrame(() => requestAnimationFrame(() => window.print()));
  };

  return (
    <button className="print-trigger" type="button" onClick={handlePrint}>
      <Printer size={15} aria-hidden="true" />
      Print / Save PDF
    </button>
  );
}
