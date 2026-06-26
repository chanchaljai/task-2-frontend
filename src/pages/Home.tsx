import { useNavigate } from "@tanstack/react-router";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow flex flex-col items-center">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Welcome to the Home Page
        </h1>
        <button onClick={() => navigate({to: "/auth/register"})}
         className="w-full bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 rounded mb-4">
          Go to Register
        </button>
        <button onClick={() => navigate({to: "/auth/login"})}
         className=" w-full bg-green-500 hover:bg-green-700 text-white text-2xl font-bold py-2 px-4 rounded">
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default Home;
