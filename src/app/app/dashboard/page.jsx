"use client";
import { RoundedBox } from "@/app/components/RoundedBox";
import { useContext } from "react";

import { LessonsPaginationContext, UserContext } from "@/app/context";
import { FluentEmoji } from "@/app/components/FluentEmoji";

export default function dashboard() {
  const { name, streak, progressTracker } = useContext(UserContext);
  const current = progressTracker
    ? Object.values(progressTracker).reduce((a, b) => a + b, 0)
    : 0;
  const progress = current / 30;
  return (
    <main className="flex justify-center items-center p-4 h-auto">
      <div className="flex justify-center items-center w-full max-w-5xl">
        <div className="gap-4 grid grid-cols-2">
          <h1 className="col-span-3 text-3xl">
            welcome, {name === NaN ? "guest" : name}
          </h1>

          <RoundedBox className="h-[20vh]">
            <div className="flex flex-col justify-center items-center h-full">
              <FluentEmoji
                emoji={streak === 0 ? "🥀" : "🔥"}
                size="3rem"
              ></FluentEmoji>
              <h1 className="flex justify-center items-center size-xl font-bold text-5xl">
                {streak} day
              </h1>
              <p className="text-xl text-center">streak</p>
            </div>
          </RoundedBox>

          {/* <RoundedBox className="h-[20vh]">
            <p className="text-center">ranks</p>
          </RoundedBox> */}

          <RoundedBox className="h-[20vh]">
            <div className="flex flex-col justify-center items-center h-full">
              <p className="size-xl font-bold text-5xl text-center">
                {current ?? 0}
              </p>
              <p className="text-center">completed lessons</p>
            </div>
          </RoundedBox>

          <RoundedBox className="col-span-2 h-30 max-h-auto">
            <div className="flex flex-col justify-center items-center h-full">
              <p className="mb-4 text-center">Progress</p>

              <div className="bg-sky-500 rounded-full w-full h-6 overflow-hidden">
                <div
                  className="bg-white rounded-full h-6 transition-all duration-300"
                  style={{ width: `${progress === NaN ? 0 : progress * 100}%` }}
                ></div>
              </div>
            </div>
          </RoundedBox>
          <RoundedBox className="col-span-2 min-h-[20vh]">
            <div className="flex flex-col justify-center items-center">
              <p className="text-center">Weekly activity trend</p>
              <BarChart />
            </div>
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
                height: `${
                  Math.max(0.02, e / Math.max(1, ...weeklyActivity)) * 100
                }%`,
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
