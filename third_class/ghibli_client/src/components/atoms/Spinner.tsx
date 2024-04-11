import Image from "next/image";

const Spinner = () => {
  return ( 
    <div id="spinner" className='flex justify-center items-baseline bg-transparent h-screen'>
      <span className='sr-only'>Loading...</span>
      <Image
        src="/totoro_1.png"
        width={80}
        height={60}
        alt="t1"
        className="rounded-full animate-bounce [animation-delay:-0.3s]"
      />
      <Image
        src="/totoro_2.png"
        width={60}
        height={45}
        alt="t2"
        className="rounded-full animate-bounce [animation-delay:-0.15s]"
      />
      <Image
        src="/totoro_3.png"
        width={30}
        height={15}
        alt="t3"
        className="rounded-full animate-bounce"
      />
      {/* <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
      <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div> */}
    </div>
  );
}

export default Spinner;