import { useState } from "react";

interface ITextFieldProps {
  onChange: (value: string) => void,
}

const TextField = ({ onChange }: ITextFieldProps) => {
  const [inputState, setInputState] = useState<string>("");

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value
    setInputState(value.toLocaleLowerCase());
  }

  const handleSubmit = () => {
    setInputState("")
    onChange(inputState)
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setInputState("")
      onChange(inputState)
    }
  };

  return (
    <div id="text-field">
      <div onKeyDown={handleKeyDown} className="shadow-lg text-black-100">
        <input
          onChange={handleChangeInput}
          className="h-9 bg-white-100 rounded-tl-lg rounded-bl-lg pl-4"
          type="text"
          name="game"
          value={inputState}
          placeholder="Search for yourself"
          required
        />
        <button 
          className={`${!inputState ? "bg-gray-100" : "bg-blue-light"} text-white-100 h-9	 pl-4 border-l-2	rounded-tr-lg	rounded-br-lg pr-4 hover:shadow-xl`}
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