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