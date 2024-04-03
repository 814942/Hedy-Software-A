type OnFunction = (a: string) => void;
interface IInputTextProps {
  placeholder: string;
  onChange: OnFunction;
  onSubmit: OnFunction;
}

const InputText = ({ placeholder, onChange, onSubmit }: IInputTextProps ) => {
  return (
    <div className="w-11/12 m-auto flex items-center justify-center p-4">
      <input 
        type="text" 
        placeholder={placeholder}
        className="text-blue w-[600px] p-4 m-8 rounded-xl border-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => onSubmit(e.key)}
        />
    </div>
  )
}

export default InputText