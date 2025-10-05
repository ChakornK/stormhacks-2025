'use client';
import { RoundedBox } from "@/app/components/RoundedBox";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function dashboard(){

    const data =  [
   {name: 'sat', value: 1},
  { name: 'mon', value: 5 },
  { name: 'tue', value: 3 },
  { name: 'wed', value: 10 },
  { name: 'thur', value: 7 },
  { name: 'fri', value: 2 },
  {name: 'sun', value: 8}
];

  // layout / scale settings
  const chartHeight = 160; // pixels for the plotting area (bars area)
  const chartWidth = 340; // total width (including y-labels area)
  const yAxisLabelWidth = 40; // reserved space for y labels at the left
  const tickCount = 5; // number of segments between 0 and top tick

  const maxValue = Math.max(...data.map((d) => d.value));
  const tickStep = Math.ceil(maxValue / tickCount) || 1; // integer step
  const scaleMax = tickStep * tickCount; // top of the scale (>= maxValue)
  const yMarkers = Array.from({ length: tickCount + 1 }, (_, i) => i * tickStep); // 0 .. scaleMax

const progress = 50;

    return(

     <main className="p-4 flex items-center justify-center h-auto">
         <div className=" max-w-5xl w-full flex items-center justify-center">
             <div className="grid grid-cols-3 gap-4">
                 <RoundedBox className="h-[20vh]">
                     <p className="text-center">
                         streak
                     </p>  
                 </RoundedBox>
      
                 <RoundedBox className="h-[20vh]">
                     <p className="text-center">
                         ranks
                     </p>
                 </RoundedBox>

                 <RoundedBox className="h-[20vh]">
                     <p className="text-center">
                         completed lessons
                     </p>
             
                 </RoundedBox>

                 <RoundedBox className="h-[20vh]">
                     <p className="text-center">
                         completed units
                     </p>
             
                 </RoundedBox>

                 <RoundedBox className="col-span-2 h-30 h-[20vh]">
                     <p className="text-center">
                         complete
                     </p>

                   <div className="relative w-full bg-sky-500 rounded-full h-5 overflow-hidden">
                     {/* Fill */}
                     <div
                         className="bg-white h-full transition-all duration-300"
                         style={{ width: `${progress}%` }}
                     ></div>

                     {/* Centered text */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium text-sm">
                     {progress}%
                </div>
</div>
            
                 </RoundedBox>
                 <RoundedBox className="col-span-2 min-h-[20vh] flex items-center justify-center">
                     <p className="text-center">
                         activity
                     </p>
                     <div style={{ width: `${chartWidth}px` }} className="relative">
                         {/* plotting area (we add a little extra height for x labels) */}
                         <div style={{ height: `${chartHeight + 28}px` }} className="relative">
                         {/* Grid lines + labels (absolute so they align exactly) */}
                         {yMarkers.map((val) => {
                             const bottomPx = (val / scaleMax) * chartHeight; // position above x-axis
                             return (
                                 <div
                                     key={val}
                                     style={{ position: "absolute", left: 0, right: 0, bottom: `${bottomPx + 10}px` }}
                                     className="flex items-center pointer-events-none"
                                 >
                                     {/* label */}
                                     <div style={{ width: `${yAxisLabelWidth}px` }} className="pr-2">
                                     <span className="text-white text-[11px] block text-right">{val}</span>
                                 </div>

                                 {/* horizontal grid line */}
                                 <div className="flex-1">
                                     <div className="border-t border-gray-600" />
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
                                     <div key={item.name} className="flex flex-col items-center">
                                         <div
                                             className="bg-white w-3"
                                             style={{ height: `${heightPx}px` }}
                                         />
                                         <span className="text-white text-[10px] mt-1">{item.name}</span>
                                         </div>
                                     );
                                 })}
                             </div>
                         </div>
                     </div>
                 </RoundedBox>

 {/*
                 <RoundedBox className="col-span-2  min-h-[20vh] h-auto">
                     <p className="text-center">
                         Activity
                     </p>

                     <ResponsiveContainer width="100%" height={300}>
                         <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            
                             <CartesianGrid stroke="#696969ff" strokeDasharray="5 3" />
                             
                             <XAxis dataKey="name" className="text-sm text-black-600" label={{ value: 'Days of the Week', position: 'insideBottom', offset: -5, style: { fill: '#5c5c5cff', fontSize: 14, fontWeight: 500 },}} />
                             <YAxis className="text-sm text-gray-060" />
                             
                             <Legend formatter={(value) => value === 'value' ? 'lessons done' : value}/>
                             <Bar dataKey="value" fill="white" />
                             
                         </BarChart>
                     </ResponsiveContainer>
                 </RoundedBox>
 */}
                 <RoundedBox className="h-[20vh]">
                     <p className="text-center">
                         smt
                     </p>
                 </RoundedBox>

            
             </div>
         </div>
     </main>

    );

}