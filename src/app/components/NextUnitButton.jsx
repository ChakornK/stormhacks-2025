export const NextUnitButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group flex items-center justify-center bg-sky-500 text-white 
                 border-sky-600 border-b-6 rounded-full w-18 h-18 
                 hover:w-40 active:mt-3 active:h-15 active:border-b-0 
                 transition-all duration-200 ease-out cursor-pointer overflow-hidden"
    >
      <div className="flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-lg font-semibold">
          Next Unit
        </span>
      </div>
    </button>
  );
};
