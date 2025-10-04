"use client";
import { useParams } from "next/navigation";

export default () => {
  const { unit } = useParams();

  return (
    <main className="p-4">
      <h1 className="text-4xl">Unit {unit}</h1>
    </main>
  );
};
