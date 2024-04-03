import TemplateContainer from "../../components/TemplateContainer"
import Spinner from "../../components/Spinner"

import { MultiResponse } from "../../interfaces"

import useApi from "../../hooks/useApi"

const StickersTemplate = () => {
  const { data, isLoading } = useApi<MultiResponse>("https://api.giphy.com/v1/stickers/trending")

  return (
    <div id="stickers" className={`${isLoading ? "h-full" : ""}`}>
      {
        isLoading ? <Spinner />
        : <TemplateContainer data={data?.data} path="stickers" />
      }
    </div>
  )
}

export default StickersTemplate