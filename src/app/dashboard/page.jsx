"use client";
import { RoundedBox } from "@/app/components/RoundedBox";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function dashboard() {
  const data = [
    { name: "sat", value: 1 },
    { name: "mon", value: 5 },
    { name: "tue", value: 3 },
    { name: "wed", value: 10 },
    { name: "thur", value: 7 },
    { name: "fri", value: 2 },
    { name: "sun", value: 8 },
  ];

  // layout / scale settings
  const chartHeight = 160; // pixels for the plotting area (bars area)
  const chartWidth = 340; // total width (including y-labels area)
  const yAxisLabelWidth = 40; // reserved space for y labels at the left
  const tickCount = 5; // number of segments between 0 and top tick

  const maxValue = Math.max(...data.map((d) => d.value));
  const tickStep = Math.ceil(maxValue / tickCount) || 1; // integer step
  const scaleMax = tickStep * tickCount; // top of the scale (>= maxValue)
  const yMarkers = Array.from(
    { length: tickCount + 1 },
    (_, i) => i * tickStep
  ); // 0 .. scaleMax

  const progress = 50;

  return (
    <main className="flex justify-center items-center p-4 h-auto">
      <div className="flex justify-center items-center w-full max-w-5xl">
        <div className="gap-4 grid grid-cols-3">
          <h1 className="col-span-3 text-xl">welcome</h1>

          <RoundedBox className="h-[20vh]">
            <p className="text-center">streak</p>
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
            <div style={{ width: `${chartWidth}px` }} className="relative">
              {/* plotting area (we add a little extra height for x labels) */}
              <div
                style={{ height: `${chartHeight + 28}px` }}
                className="relative"
              >
                {/* Grid lines + labels (absolute so they align exactly) */}
                {yMarkers.map((val) => {
                  const bottomPx = (val / scaleMax) * chartHeight; // position above x-axis
                  return (
                    <div
                      key={val}
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: `${bottomPx + 10}px`,
                      }}
                      className="flex items-center pointer-events-none"
                    >
                      {/* label */}
                      <div
                        style={{ width: `${yAxisLabelWidth}px` }}
                        className="pr-2"
                      >
                        <span className="block text-[11px] text-white text-right">
                          {val}
                        </span>
                      </div>

                      {/* horizontal grid line */}
                      <div className="flex-1">
                        <div className="border-gray-600 border-t" />
                      </div>
                    </div>
                  );
                })}

                {/* Y axis (vertical) */}
                <div
                  style={{
                    position: "absolute",
                    left: `${yAxisLabelWidth - 2}px`,
                    bottom: 18,
                    height: `${chartHeight}px`,
                    width: "2px",
                  }}
                  className="bg-black"
                />

                {/* X axis (horizontal) */}
                <div
                  style={{
                    position: "absolute",
                    left: `${yAxisLabelWidth}px`,
                    right: 0,
                    bottom: 18,
                    height: "2px",
                  }}
                  className="bg-black"
                />

                {/* Bars area (positioned to the right of the label column) */}
                <div
                  style={{
                    position: "absolute",
                    left: `${yAxisLabelWidth}px`,
                    bottom: 0,
                    height: `${chartHeight}px`,
                    right: 0,
                  }}
                  className="flex items-end space-x-4 px-2"
                >
                  {data.map((item) => {
                    const heightPx = (item.value / scaleMax) * chartHeight;
                    return (
                      <div
                        key={item.name}
                        className="flex flex-col items-center"
                      >
                        <div
                          className="bg-white w-3"
                          style={{ height: `${heightPx}px` }}
                        />
                        <span className="mt-1 text-[10px] text-white">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </RoundedBox>

          <RoundedBox className="h-[20vh]">
            <p className="text-center">smt</p>
          </RoundedBox>
        </div>
      </div>
    </main>
  );
}
