export const StarButton = ({ children, onClick, active = false }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        active
          ? "bg-sky-500 text-white"
          : "bg-neutral-300 text-neutral-600"
      } flex items-stretch active:mt-3 pb-3 active:pb-0 active:border-b-0 
         active:border-b-0 active:rounded-none w-30 h-18 active:h-15 
         text-lg transition-all duration-75 ease-out cursor-pointer`}
      style={{
        clipPath:
          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        borderRadius: 0
      }}
    >
      <div
        className={`flex justify-center items-center grow ${
          active ? "bg-sky-400" : "bg-neutral-400"
        }`}
        style={{
          clipPath:
            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          borderRadius: 0,
        }}
      >
        {children}
      </div>
    </button>
  );
};
