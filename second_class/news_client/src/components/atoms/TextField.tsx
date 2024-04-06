import { useState } from "react";

interface ITextFieldProps {
  onChange: (value: string) => void,
}

const TextField = ({ onChange }: ITextFieldProps) => {
  const [inputState, setInputState] = useState<string>("");

  const handleChangeInput = (e: any) => {
    const value: string = e.target.value
    setInputState(value.toLocaleLowerCase());
  }

  const handleSubmit = () => {
    setInputState("")
    onChange(inputState)
  };
  return (
    <div id="text-field">
      <div className="shadow-lg">
        <input
          onChange={handleChangeInput}
          className="h-9 bg-cs-white rounded-tl-lg rounded-bl-lg pl-4"
          type="text"
          name="game"
          value={inputState}
          placeholder="Search for yourself"
          required
        />
        <button 
          className={`${!inputState ? "bg-cs-gray-100" : "bg-cs-white"} h-9	 pl-4 border-l-2	rounded-tr-lg	rounded-br-lg pr-4 hover:shadow-xl`}
          onClick={handleSubmit}
          disabled={!inputState}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default TextField