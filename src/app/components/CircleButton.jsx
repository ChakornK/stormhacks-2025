export const CircularButton = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="
      bg-sky-400 
      active:mt-0 
      
      w-30 h-18 
      border-sky-500 
      border-b-5
      active:border-b-0 
      active:mt-3
      rounded-[100%]
      text-white text-lg 
      flex items-center justify-center 
      shadow-[0_10px_0_1px_#00A6F4]

      transition-all duration-75 ease-out 
      cursor-pointer
      "
      onClick={onClick}
    >
      {children}
    </button>
  );
};