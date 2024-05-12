"use client"
import { useState } from "react"

const Modal = ({ onChange }: any) => {
  const [modal, setModal] = useState<Boolean>(true)

  const handleChange = (e: any) => {
    onChange(e.target.value)
  }

  return (
    <>
    {modal && <dialog
      className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
      <div className="rounded-lg bg-white m-auto">
          <div className="flex flex-col items-center">
              <h3 className="m-4 text-pink font-bold text-xl">Say your name</h3>
              <div>
                <input className="rounded-lg p-4 m-4 border-2 border-pink shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" type="text" placeholder="Who are you?" onChange={handleChange} />
                <button
                  className="rounded-lg p-4 m-4 border-2 border-pink shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                  onClick={() => setModal(!modal)}
                >
                  Enter
                </button>
              </div>
          </div>
      </div>
    </dialog>
    }
    </>
  );
}

export default Modal;