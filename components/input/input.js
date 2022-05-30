const Input = ({ type, id, label }) => {
  return (
    <div className="relative h-full">
      <input
        type={type}
        id={id}
        className="h-full peer pt-8 border border-gray-200 focus:outline-none focus:border-gray-500 focus:shadow-sm w-full p-3 placeholder-transparent"
        placeholder={label}
        autoComplete="off"
      />
      <label
        htmlFor={id}
        className="peer-placeholder-shown:opacity-100 opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
