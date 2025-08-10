"use client"; // This is important! It tells Next.js this is an interactive component.

import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {

  return (
    <div className="min-h-screen backdrop-blur-xl dark:bg-neutral-950 text-gray-800">
      <ThemeToggle/>

    </div>
  );
}