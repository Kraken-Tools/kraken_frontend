export default function CustomInput({label, placeholder, name, type}) {
  
  return (
    <div className="flex flex-col">
      <label htmlFor="custom-input" className="pb-1">
        {label}
      </label>
        <div className="flex items-center">
          <span></span>
          <input 
            id="custom-input"
            type={type}
            name={name}
            placeholder={placeholder}
            className="w-full border-2 placeholder-slate-600 text-black border-main-highlight-color outline-none rounded-md px-3 h-10"/>
        </div>
    </div>
  );
}