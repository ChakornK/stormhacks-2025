"use client";

import { useParams } from "next/navigation";
import { Dropdown } from "@/app/components/Dropdown";
import { CircularButton } from "@/app/components/CircleButton";
import { StarButton } from "@/app/components/StarButton";
import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft02Icon,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons/index";

export default function LessonPath() {
  const { unit } = useParams();
  const router = useRouter();
  const buttonOffsets = [0, -60, 60, -60, 60];
  const pgClamp = [1, 5];

  const paginate = (newDirection) => {
    router.push(
      `/app/lessons/${Math.max(
        pgClamp[0],
        Math.min(pgClamp[1], +unit + newDirection)
      )}`,
      undefined,
      {
        scroll: false,
      }
    );
  };

  // Variants for sliding

  return (
    <main className="p-8">
      <div>
        <Dropdown className="inline-block bg-sky-400 px-6 py-2 border-sky-500 border-b-6 rounded-2xl text-white text-lg cursor-pointer">
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

          <div className="relative flex justify-between w-full max-w-[1100px]">
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

        <button
          onClick={() => paginate(-1)}
          style={
            +unit === pgClamp[0]
              ? {
                  filter: "saturate(0)",
                  pointerEvents: "none",
                }
              : {}
          }
          className="group bottom-8 left-8 fixed flex justify-center items-center bg-sky-500 active:mt-3 border-sky-600 border-b-6 active:border-b-0 rounded-full w-18 hover:w-48 h-18 active:h-15 overflow-hidden text-white transition-all duration-200 ease-out cursor-pointer"
        >
          <div className="flex justify-center items-center overflow-clip">
            <HugeiconsIcon icon={ArrowLeft02Icon} strokeWidth={3} />
            <span className="opacity-0 group-hover:opacity-100 pl-0 group-hover:pl-2 w-0 group-hover:w-auto font-semibold text-lg text-nowrap transition-opacity duration-150">
              Previous Unit
            </span>
          </div>
        </button>

        <button
          onClick={() => paginate(1)}
          style={
            +unit === pgClamp[1]
              ? {
                  filter: "saturate(0)",
                  pointerEvents: "none",
                }
              : {}
          }
          className="group right-8 bottom-8 fixed flex justify-center items-center bg-sky-500 active:mt-3 border-sky-600 border-b-6 active:border-b-0 rounded-full w-18 hover:w-40 h-18 active:h-15 overflow-hidden text-white transition-all duration-200 ease-out cursor-pointer"
        >
          <div className="flex justify-center items-center overflow-clip">
            <HugeiconsIcon icon={ArrowRight02Icon} strokeWidth={3} />
            <span className="opacity-0 group-hover:opacity-100 pl-0 group-hover:pl-2 w-0 group-hover:w-auto font-semibold text-lg text-nowrap transition-opacity duration-150">
              Next Unit
            </span>
          </div>
        </button>
      </div>
    </main>
  );
}
