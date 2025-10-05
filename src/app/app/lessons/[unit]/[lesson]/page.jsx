"use client";

import { PrimaryButton } from "@/app/components/Button";
import { useParams } from "next/navigation";

export default () => {
  const { unit, lesson } = useParams();

  return (
    <main className="p-4">
      <h1 className="text-4xl">
        Lesson {lesson} of unit {unit}
      </h1>
    </main>
  );
};
