import { useEffect, useState } from "react"

import InputText from "../../components/InputText"
import Spinner from "../../components/Spinner"

import useMutateApi from "../../hooks/useMutateApi"

import { SingleResponse } from "../../interfaces"
import ImageContainer from "../../components/ImageContainer"

const Create = () => {
  const [createType, setCreateType] = useState<string>("stickers")
  const { data, fetchData, isLoading } = useMutateApi<SingleResponse>(`https://api.giphy.com/v1/${createType}/translate`)
  const [inputValue, setInputValue] = useState<string>("")
  const [isSearchData, setIsSearchData] = useState<boolean>(true)

  const handleChange = (value: string) => {
    setInputValue(value)
  }
  const handleSubmit = (key: string) => {
    if (key === "Enter" && inputValue) {
      fetchData(`s=${inputValue}`)
    }
  }
  const handleButton = () => {
    if (createType === "gifs") {
      setCreateType("stickers")
    }
    else {
      setCreateType("gifs")
    }
  }

  useEffect(() => {
    if (data) setIsSearchData(false)
  }, [data])

  return (
    <div id="create" className='pt-20'>
      <div id="create" className='rounded-xl w-11/12 m-auto mt-8'>
        <div>
          <InputText placeholder="Write a word or phrase" onChange={handleChange} onSubmit={handleSubmit} />
        </div>

        <div id="card_content" className="p-8 text-blue flex justify-center items-center gap-8 tracking-[5px]">
          <div className="w-3/5 flex flex-col gap-8">
            <h2 className="text-6xl font-bold text-secondary drop-shadow-lg">
              Here you can create your own Gif or Sticker
            </h2>
            <p>
              Converts words and phrases to the perfect GIF or Sticker using GIPHY's special sauce algorithm.
            </p>
            <p>
              You can choose between gif or sticker by clicking on the button below.
            </p>
          </div>
            <div id="img_content" className="flex items-center justify-center w-1/4 h-[400px]">
              {
                isLoading
                  ? <Spinner />
                  : isSearchData ? <div className="p-8 flex items-center justify-center">
                                    <div className="absolute animate-spin rounded-full h-72 w-72 border-t-4 border-b-4 border-gray-100"></div>
                    <p className="text-center">Look at what you are creating</p></div>
                  : <ImageContainer
                      title={data?.data.title}
                      images={data?.data.images}
                      username={data?.data.username}
                    />
              }
            </div>
        </div>

        <div id="button_content" className="w-11/12 m-auto">
          <button
            onClick={handleButton}
            className="w-[210px] p-4 m-8 rounded-xl bg-gray-100 text-primary shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
          >
            Create {createType}
          </button>
      </div>
      </div>
    </div>
  )
}

export default Create