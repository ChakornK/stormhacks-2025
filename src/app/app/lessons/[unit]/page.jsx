import { PrimaryButton } from "@/app/components/Button";
import { CircularButton } from "@/app/components/CircleButton";

export default () => {
  return (
    <main className="p-4">
      <div className="bg-sky-400 px-6 py-2 inline-block
     border-sky-500 border-b-6 rounded-2xl text-white text-lg cursor-pointer">
      <h1 className="text-4xl">Unit</h1>
      </div>
      <div className="flex items-center justify-left h-screen">
       <CircularButton>
            <div className="flex items-center gap-1">
              
            </div>
          </CircularButton>


          </div>
    </main>
  );
};
