import TemplateContainer from "../../components/TemplateContainer"
import Spinner from "../../components/Spinner"

import useApi from "../../hooks/useApi"

import { MultiResponse } from "../../interfaces"

const GifsTemplate = () => {
  const { data, isLoading } = useApi<MultiResponse>("https://api.giphy.com/v1/gifs/trending")
  return (
    <div id="gifs" className={`${isLoading ? "h-full" : ""}`}>
      {
        isLoading ? <Spinner />
        : <TemplateContainer data={data?.data} path="gifs" />
      }
    </div>
  )
}

export default GifsTemplate