import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <main className="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-purple-700">
            <img
              src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg"
              alt=""
            />
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;
