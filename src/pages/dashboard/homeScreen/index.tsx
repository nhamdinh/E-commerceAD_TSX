import { Button } from "antd";
import { useAppModal } from "@/hooks";
import { useState } from "react";
import { Main } from "@/modules/Home";

export default function HomeScreen() {
  const { handleOpenAppModal } = useAppModal();

  return (
    <main className="main-wrap">
      <Main />
    </main>
  );
}
