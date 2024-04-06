"use client"

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface IDropdownProps {
  items: ICategories[];
  onChange: (value: string) => void;
  title: string;
}

const Dropdown = ({ items, onChange, title }: IDropdownProps) => {
  const [inputName, setInputName] = useState<string>("")
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleDropdown = (e: React.MouseEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value
    setInputName(value)
    setIsOpen(false)
    onChange(value);
  }

  const toggle = () => {
      setIsOpen(old => !old);
  }

  return (
    <>
      <div id="dropdown" className="relative p-2 border-2 border-black-100 rounded-2xl text-white-100 bg-red-primary hover:bg-red-light shadow-lg">
          <button
              className="flex items-center justify-center gap-2"
              onClick={toggle}
          >
            {title}
          {isOpen ? <ChevronUp /> : <ChevronDown />}
          </button>
          <div className={`absolute right-0 text-black-100 top-8 z-30 flex flex-col rounded-md ${isOpen ? "block": "hidden"}`}>
          {
            items?.length ? items.map((option: ICategories) => {
              return (
                  <label key={option.id} className="flex whitespace-nowrap">
                    <input
                      name={inputName}
                      defaultValue={option.name}
                      className="px-2 py-1 hover:bg-gray-100 hover:text-white-100 cursor-pointer"
                      onClick={handleDropdown}
                    />
                  </label>
              );
            }) : <p>Data not found</p>
          }
          </div>
      </div>
      {
          isOpen
              ?
              <div
                  className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
                  onClick={toggle}
              ></div>
              :
              <></>
      }
  </>
  )
}

export default Dropdown