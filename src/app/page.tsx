// import WorkerPlayground from "@/playground";

import dynamic from "next/dynamic";

const WorkerPlayground = dynamic(() => import("@/playground"), {
  ssr: false,
});

export default function Home() {
  return <WorkerPlayground />;
}
