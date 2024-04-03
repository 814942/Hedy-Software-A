import { useNavigate } from "react-router-dom";

import useApi from "../../hooks/useApi"

import Spinner from "../../components/Spinner"
import ImageContainer from "../../components/ImageContainer";

import { SingleResponse } from "../../interfaces";

const Home = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useApi<SingleResponse>("https://api.giphy.com/v1/gifs/random")

  return (
    <div id="content" className='h-screen pt-20'>
      <div id="container" className='rounded-xl w-11/12 m-auto mt-8'>
        <div id="card_content" className="p-8 text-blue flex justify-start items-start gap-8 tracking-[5px]">
          <div className="w-3/5 flex flex-col gap-8">
            <div>
              <h1 className="text-6xl font-bold text-secondary drop-shadow-lg">Discover</h1>
              <h1 className="text-6xl font-bold text-secondary drop-shadow-lg">Find</h1>
              <h1 className="text-6xl font-bold text-secondary drop-shadow-lg">Create</h1>
            </div>
            <div>
              <p>
                <span className="font-bold">Discover</span> thousands of Gifs and Stickers. 
              </p>
              <p>
                <span className="font-bold">Find</span> your favorite and share it with your friends. 
              </p>
              <p>
                <span className="font-bold">Create</span> your own Gif or Sticker and show it to the world.
              </p>
            </div>
          </div>
          <div id="img_content" className="flex items-center justify-center w-1/4	">
            {
              isLoading
                ?  <Spinner />
                : <ImageContainer 
                    title={data?.data.title}
                    images={data?.data.images}
                    username={data?.data.username}
                  />
            }
          </div>
        </div>
      </div>
      <div id="button_content" className="w-11/12 m-auto">
        <button
        onClick={() => navigate('/create')}
          className="w-[200px] p-4 m-8 rounded-xl bg-gray-200 text-primary shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] animate-bounce hover:animate-none"
        >
          Create
        </button>
      </div>
    </div>
  )
}
//  bg-gradient-to-r from-[#EFEFBB] via-[#EFEFBB] to-[#D4D3DD] rounded-xl  

export default Home