import Spinner from "../atoms/Spinner";

const SpinnerContainer = () => {
  return (
    <div className="h-screen text-blue-primary gap-8 flex items-center justify-center">
      <Spinner />
      <Spinner />
      <Spinner />
    </div>
  );
}

export default SpinnerContainer;