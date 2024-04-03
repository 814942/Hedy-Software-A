import { Images } from "../interfaces";

interface IImageProps {
  title?: string;
  images?: Images;
  username?: string;
}

const ImageContainer = ({ title, images, username }: IImageProps) => (
  <div
    id="img_render"
    className="h-[400px]"
  >
    <img 
      title={title} 
      src={images?.fixed_height.url} 
      alt={username} 
      className="h-[400px] rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]" 
    />
    {/* <button onClick={() => handleDownload(d.images.downsized.url)}>Descarga</button> */}
  </div>
)

export default ImageContainer