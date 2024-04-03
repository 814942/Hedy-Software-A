// import FileSaver from "file-saver";

import { useEffect, useState } from "react"
import InputText from "./InputText"
import Spinner from "./Spinner";
import { GIFObject, MultiResponse } from "../interfaces";
import useMutateApi from "../hooks/useMutateApi";
import ImageContainer from "./ImageContainer";

interface IImageProps {
  data?: GIFObject[];
  path: string;
}

const TemplateContainer = ({ data, path }: IImageProps) => {
  const [inputValue, setInputValue] = useState<string>("")
  const [dataValues, setDataValues] = useState<GIFObject[] | undefined>([])
  const [isSearchData, setIsSearchData] = useState<boolean>(true)
  
  const { data: dataFound, fetchData } = useMutateApi<MultiResponse>(`https://api.giphy.com/v1/${path}/search`)

  // const handleDownload = (path: string) => {
    // Todo implementar descarga
  //   FileSaver.saveAs(path, "gif");
  // }

  const handleChange = (value: string) => {
    setInputValue(value)
  }
  const handleSubmit= (key: string) => {
    if (key === "Enter") {
      setIsSearchData(true)
      fetchData(`q=${inputValue}`)
    }
  }

  useEffect(() => {
    setIsSearchData(false)
    setDataValues(data)
  }, [data])

  useEffect(() => {
    if (dataFound) {
      setDataValues(dataFound.data)
      setIsSearchData(false)
    }
  }, [dataFound])

  return (
    <>
      <div className="p-12"></div>
      <InputText placeholder={`Search your ${path}`} onChange={handleChange} onSubmit={handleSubmit} />
      <div 
        id="img_container" 
        className="h-full w-11/12 m-auto flex items-center justify-center flex-wrap gap-4"
      >
      {!isSearchData ? dataValues?.map((obj: GIFObject) => (
        <ImageContainer
          key={obj.id}
          title={obj.title}
          images={obj.images}
          username={obj.username}
        />))
      : <div className="h-full">
        <Spinner />
        </div>
      }
      </div>
    </>
  )
}

export default TemplateContainer