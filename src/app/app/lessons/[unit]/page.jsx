"use client";
import { useParams } from "next/navigation";
import { Dropdown } from "@/app/components/Dropdown";
import { CircularButton } from "@/app/components/CircleButton";
import { StarButton } from "@/app/components/StarButton";

export default function LessonPath() {
  const { unit } = useParams();

  const buttonOffsets = [0, -60, 60, -60, 60];

  return (
    <main className="p-8">
      <Dropdown
        className="bg-sky-400 px-6 py-2 inline-block
     border-sky-500 border-b-6 rounded-2xl text-white text-lg cursor-pointer"
      >
        <h1 className="text-4xl">Unit {unit}</h1>
      </Dropdown>

      <div className="relative flex justify-center items-center h-[300px]">
        <svg
          className="absolute w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 100 150 Q 250 90, 400 150 Q 550 210, 700 150 Q 850 90, 1000 150"
            className="stroke-neutral-400"
            strokeWidth="6"
            fill="transparent"
          />
        </svg>

        <div className="flex justify-between w-full max-w-[1100px] relative">
          {buttonOffsets.map((offset, i) => (
            <div key={i} className="relative" style={{ top: `${offset}px` }}>
              <CircularButton active={i === 0}>
                <span>{i + 1}</span>
              </CircularButton>
            </div>
          ))}
          <div className="relative" style={{ top: "0px" }}>
            <StarButton active={false} />
          </div>
        </div>
      </div>
    </main>
  );
}
