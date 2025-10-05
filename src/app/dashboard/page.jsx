import { RoundedBox } from "@/app/components/RoundedBox";

export default function dashboard(){


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
             
            </RoundedBox>

             <RoundedBox className="col-span-2 h-30 h-[20vh]">
             <p className="text-center">
                 Activity
             </p>
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