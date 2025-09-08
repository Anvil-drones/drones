"use client";

import dynamic from "next/dynamic";

const ModelScroller = dynamic(
  () => import("@/components/shared/ModelScroller"),
  {
    ssr: false,
  }
);
const ModelScrollerTab = dynamic(
  () => import("@/components/shared/ModelScrollerTab"),
  {
    ssr: false,
  }
);

export default function ModelScrollerWrapper() {
  return (
    <>
      <ModelScroller />
      <ModelScrollerTab />
    </>
  );
}
