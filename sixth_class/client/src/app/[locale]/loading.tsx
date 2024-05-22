const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <span className="relative flex h-3 w-3 m-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow opacity-75"></span>
      </span>
      <span className="relative flex h-3 w-3 m-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow opacity-75"></span>
      </span>
      <span className="relative flex h-3 w-3 m-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow opacity-75"></span>
      </span>
    </div>
  );
}

export default Loading;