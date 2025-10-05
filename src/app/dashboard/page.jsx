"use client";
import { RoundedBox } from "@/app/components/RoundedBox";
import { FluentEmoji } from "../components/FluentEmoji";
import { useContext } from "react";

import { UserContext } from "../context";

export default function dashboard() {
  const progress = 50;
  const {streak} = useContext(UserContext);

  return (
    <main className="flex justify-center items-center p-4 h-auto">
      <div className="flex justify-center items-center w-full max-w-5xl">
        <div className="gap-4 grid grid-cols-3">
          <h1 className="col-span-3 text-xl">welcome</h1>

          <RoundedBox className="h-[20vh]">
            <p className="text-center">streak</p>
            <h1 className=" flex justify-center items-center text-5xl font-bold size-xl">{streak} 

                <FluentEmoji emoji = {streak === 0? "🥀" : "🔥"} size="3rem"></FluentEmoji>

            </h1>
            
          </RoundedBox>

          <RoundedBox className="h-[20vh]">
            <p className="text-center">ranks</p>
          </RoundedBox>

          <RoundedBox className="h-[20vh]">
            <p className="text-center">completed lessons</p>
          </RoundedBox>

          <RoundedBox className="h-[20vh]">
            <p className="text-center">completed units</p>
          </RoundedBox>

          <RoundedBox className="col-span-2 h-[20vh] h-30">
            <p className="text-center">complete</p>

            <div className="relative bg-sky-500 rounded-full w-full h-5 overflow-hidden">
              {/* Fill */}
              <div
                className="bg-white h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>

              {/* Centered text */}
              <div className="absolute inset-0 flex justify-center items-center font-medium text-gray-500 text-sm">
                {progress}%
              </div>
            </div>
          </RoundedBox>
          <RoundedBox className="flex justify-center items-center col-span-2 min-h-[20vh]">
            <p className="text-center">activity</p>
            <BarChart />
          </RoundedBox>

          <RoundedBox className="h-[20vh]">
            <p className="text-center">smt</p>
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
