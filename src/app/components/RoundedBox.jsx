export const RoundedBox = ({ className, children }) => {
  return (
    <div
      className={`bg-sky-400 px-6 py-2 inline-block border-sky-500 border-b-6  rounded-2xl text-white text-lg ${className}`}
    >
      {children}
    </div>
  );
};
