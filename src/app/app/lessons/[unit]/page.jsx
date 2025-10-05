"use client";
import { useParams } from "next/navigation";
import { Dropdown } from "@/app/components/Dropdown";
import { CircularButton } from "@/app/components/CircleButton";

export default () => {
  const { unit } = useParams();

  return (
    <main className="p-4">
      <Dropdown className="bg-sky-400 px-6 py-2 inline-block
     border-sky-500 border-b-6 rounded-2xl text-white text-lg cursor-pointer">
      <h1 className="text-4xl">Unit {unit}</h1>
      </Dropdown>
      <div className="flex items-center justify-left h-screen">
       <CircularButton>
            <div className="flex items-center gap-1">
            </div>
          </CircularButton>
          </div>
    </main>
  );
};
