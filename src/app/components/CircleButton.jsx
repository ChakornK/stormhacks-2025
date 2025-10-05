export const CircularButton = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="flex items-stretch bg-sky-500 active:mt-3 pb-3 active:pb-0 active:border-b-0 rounded-[100%/90%] active:rounded-[100%] w-30 h-18 active:h-15 text-white text-lg transition-all duration-75 ease-out cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-center items-center bg-sky-400 rounded-[100%] grow">
        {children}
      </div>
    </button>
  );
};
