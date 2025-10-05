export const CircularButton = ({ children, onClick, active = false }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        active ? "bg-sky-500 text-white" : "bg-neutral-300 text-neutral-600"
      } flex items-stretch active:mt-3 pb-3 active:pb-0 active:border-b-0 
        rounded-[100%/90%] active:rounded-[100%] w-30 h-18 active:h-15 
        text-lg transition-all duration-75 ease-out cursor-pointer`}
    >
      <div
        className={`flex justify-center items-center rounded-[100%] grow ${
          active ? "bg-sky-400" : "bg-neutral-400"
        }`}
      >
        {children}
      </div>
    </button>
  );
};
