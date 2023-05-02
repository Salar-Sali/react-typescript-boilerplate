import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col gap-y-5 justify-center items-center text-4xl">
      <h3>ErrorPage</h3>
      <button
        className="p-2 rounded-md border border-black"
        onClick={() => navigate("/")}
      >
        Home
      </button>
    </div>
  );
}

export default ErrorPage;
