export const CircularButton = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="bg-sky-400 active:mt-1.5 px-6 py-2 border-sky-500 border-b-6 active:border-b-0 rounded-2xl text-white text-lg transition-all duration-75 ease-out cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};