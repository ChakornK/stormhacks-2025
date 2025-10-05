"use client";
import { RoundedBox } from "@/app/components/RoundedBox";
import { useContext } from "react";

import { LessonsPaginationContext, UserContext } from "@/app/context";
import { FluentEmoji } from "@/app/components/FluentEmoji";

export default function dashboard() {
  const { name } = useContext(UserContext);
  const { streak } = useContext(UserContext);
  const { current } = useContext(LessonsPaginationContext);
  const { total } = useContext(LessonsPaginationContext);
  const progress = current / total;
  return (
    <main className="flex justify-center items-center p-4 h-auto">
      <div className="flex justify-center items-center w-full max-w-5xl">
        <div className="gap-4 grid grid-cols-3">
          <h1 className="col-span-3 text-3xl">
            welcome, {name === NaN ? "guest" : name}
          </h1>

          <RoundedBox className="h-[20vh]">
            <p className="text-center">streak</p>
            <h1 className="flex justify-center items-center size-xl font-bold text-5xl">
              {streak}

              <FluentEmoji
                emoji={streak === 0 ? "🥀" : "🔥"}
                size="3rem"
              ></FluentEmoji>
            </h1>
          </RoundedBox>

          {/* <RoundedBox className="h-[20vh]">
            <p className="text-center">ranks</p>
          </RoundedBox> */}

          <RoundedBox className="h-[20vh]">
            <p className="text-center">completed lessons</p>
            <p className="size-xl font-bold text-5xl text-center">
              {current === NaN ? current : 0}
            </p>
          </RoundedBox>

          {/* <RoundedBox className="h-[20vh]">
            <p className="text-center">completed units</p>
          </RoundedBox> */}

          <RoundedBox className="col-span-2 h-30 max-h-auto">
            <p className="text-center">complete</p>

            <div className="relative bg-sky-500 py-4 rounded-full w-full h-5 overflow-hidden">
              {/* Fill */}
              <div
                className="bg-white h-full transition-all duration-300"
                style={{ width: `${progress === NaN ? progress : 0}%` }}
              ></div>

              {/* Centered text */}
              <div className="absolute inset-0 flex justify-center items-center font-medium text-gray-500 text-sm">
                {progress === NaN ? progress : 0}%
              </div>
            </div>
          </RoundedBox>
          <RoundedBox className="flex justify-center items-center col-span-2 min-h-[20vh]">
            <p className="text-center">activity</p>
            <BarChart />
          </RoundedBox>
        </div>
      </div>
    </main>
  );
}

const BarChart = () => {
  const { weeklyActivity } = useContext(UserContext);

  return (
    weeklyActivity && (
      <div className="flex flex-col items-stretch w-72 h-40">
        <div className="flex justify-evenly items-end border-white border-b-2 border-l-2 grow">
          {weeklyActivity.map((e, i) => (
            <div
              key={i}
              className="bg-white rounded-t-md w-6"
              style={{
                height: `${(e / Math.max(1, ...weeklyActivity)) * 100}%`,
              }}
            ></div>
          ))}
        </div>
        <div className="flex justify-evenly text-xs">
          {["S", "M", "T", "W", "T", "F", "S"].map((e, i) => (
            <span key={i} className="w-6 text-center">
              {e}
            </span>
          ))}
        </div>
      </div>
    )
  );
};
