import { ErrorResponse, useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as ErrorResponse;
  const navigate = useNavigate();
  console.error(error);

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-gray-300">
      <h1 className="text-9xl font-extrabold text-white-100 tracking-widest">404</h1>
      <div className="bg-secondary px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
          <a
            className="relative inline-block text-sm font-medium text-secondary group active:text-primary focus:outline-none focus:ring"
          >
            <span
              className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-primary group-hover:translate-y-0 group-hover:translate-x-0"
            ></span>

            <span className="relative block px-8 py-3 bg-gray-200 border border-current">
              <button onClick={() => navigate('/')}>Go Home</button>
            </span>
          </a>
        </button>
    </main>
  );
}
