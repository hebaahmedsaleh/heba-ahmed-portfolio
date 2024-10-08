"use client";

import { useEffect, useState } from "react";
import Header from "./ui/components/header";
import Banner from "./ui/components/banner";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const classNames = loading
    ? "flex min-h-screen flex-col kenburns-bottom"
    : "flex min-h-screen flex-col inner-screen";
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <main className="flex min-h-screen flex-col inner-screen">
      <Header></Header>

      <Banner></Banner>
    </main>
  );
}
