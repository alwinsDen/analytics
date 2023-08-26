"use client";
import dynamic from "next/dynamic";

const MainPage = dynamic(() => import("../app/components/MainPage"), {
  ssr: false,
});
export default function Home() {
  return <MainPage />;
}
