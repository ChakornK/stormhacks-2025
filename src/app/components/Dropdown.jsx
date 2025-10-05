export const Dropdown = ({ options = [], onSelect, label = "Select" }) => {
  return (
    <select
      onChange={(e) => onSelect && onSelect(e.target.value)}
      className="bg-sky-400 px-6 py-2 border-sky-500 border-b-6 rounded-2xl text-white text-lg transition-all duration-75 ease-out cursor-pointer"
    >
      <option disabled selected>
        {label}
      </option>
      {options.map((opt, i) => (
        <option key={i} value={opt.value ?? opt}>
          {opt.label ?? opt}
        </option>
      ))}
    </select>
  );
};
