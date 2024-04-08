/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import Dropdown from "@/components/atoms/Dropdown";
import TextField from "@/components/atoms/TextField";
import Spinner from "@/components/molecules/Spinner";
import { useNewsContext } from "@/context/data.context";
import { ICountries } from "@/interfaces/global.interfaces";
import categories from "@/utilities/categories.utility";
import getCountries from "@/utilities/countries.utility";
import { Earth } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { setCountry } = useNewsContext()

  
  const [countries, setCountries] = useState<ICountries[]>([])
  const [activeCountry, setActiveCountry] = useState<ICountries>()
  const [modalDisplay, setModalDisplay] = useState<boolean>(true)
  
  const init = async() => {
    const allCountries = await getCountries()
    setCountries(allCountries)
  }

  const handleChangeDropdown = (category: string) => {
    console.log("🚀 ~ handleChangeDropdown ~ type:", category)
  }

  const handleChangeInput = async (value: string) => {
    console.log("🚀 ~ handleChangeInput ~ value:", value)
  }

  const handleModal = () => {
    setModalDisplay(old => !old)
  }

  const handleActiveCountry = (selectCountry: ICountries) => {
    const copyCountries = countries

    for (const country of copyCountries) {
      if (country.active) {
        country.active = false
      }

      if (country.id === selectCountry.id) {
        country.active = true
      }
    }

    setCountries(copyCountries)
    setActiveCountry(selectCountry)
    setCountry(selectCountry)
    setModalDisplay(old => !old)
  }

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    if (countries.length) {
      const findActive = countries.find(c => c.active)
      setActiveCountry(findActive)
      setCountry(findActive)
    }
  }, [countries])

  return ( 
    <>
      <header className="fixed bg-white-100 inset-x-0 top-0 border-b-2 border-black-100 z-50">
        <div className="w-11/12 m-auto flex justify-between items-center max-w-5xl">
          <Link href={"/home"}>
            <div className="flex items-center p-2 gap-2 bg-black-100 m-4 rounded-3xl text-white-100">
              <Earth size={50} />
                <p className="text-xl">News from the world</p>
            </div>
          </Link>
          <nav>
            <TextField onChange={handleChangeInput} />
          </nav>
          <nav className="flex items-center justify-center gap-4">
              <Dropdown title="Categories" items={categories} onChange={handleChangeDropdown} />
              {
                activeCountry ?
                <Image 
                  title="Choose the country you want to have news from" 
                  onClick={handleModal} 
                  className="cursor-pointer mr-2 border-2 border-black-100 rounded-2xl" 
                  src={activeCountry.icon} alt={activeCountry.code} width={60} height={60} />
                : <Spinner />
              }
          </nav>
        </div>
      </header>
      <div className={`${modalDisplay ? "hidden" : "block"} mt-24 m-auto `}>
        <div className="p-4 pl-6 text-xl">Choose the country you want to have news from</div>
        <div className="p-6 flex flex-wrap h-[300px] overflow-scroll gap-4">
          {
            countries.length ? countries.map((country: ICountries) => {
              return (
                <div 
                  key={country.id}
                  className="cursor-pointer overflow-hidden w-[15%] max-h-28 mb-2 flex hover:scale-110 transform transition duration-400"
                  onClick={() => handleActiveCountry(country)}
                >
                  <Image className="mr-2" src={country.icon} alt={country.code} width={60} height={60} />
                  <div>{country.name}</div>
                </div>
              )
            })
            : <Spinner />
          }
        </div>
      </div>
    </>
  );
}

export default Navbar;