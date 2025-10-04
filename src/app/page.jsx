"use client";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons/index";
import { PrimaryButton } from "./components/Button";
import { FluentEmoji } from "./components/FluentEmoji";

import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Home() {
  const router = useRouter();

  return (
   
    <main className="flex justify-center items-center gap-8 bg-gradient-to-b from-transparent to-sky-100 w-screen h-screen">
      {/* Title text */}
      <div>
        {/* Placeholder name */}
        <h2 className="text-2xl">Welcome to</h2>
        <h1 className="bg-clip-text bg-gradient-to-b from-sky-400 to-sky-500 font-bold text-transparent text-6xl">Math helper</h1>
        <p className="text-neutral-600 text-lg">Lorem ipsum</p>

        <div className="mt-6">
          <PrimaryButton onClick={() => router.push("/login")}>
            <div className="flex items-center gap-1">
              Get started <HugeiconsIcon icon={ArrowRight02Icon} />
            </div>
          </PrimaryButton>
        </div>
      </div>

      {/* Welcome icon */}
      <div>
        <FluentEmoji emoji="👋" size="6rem" />
      </div>
    </main>
    
  );
}
