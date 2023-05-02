import { useParams, useNavigate } from "react-router-dom";

function DynamicTest() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-y-4">
      <h3>DynamicTest {id}</h3>
      <button
        className="p-2 rounded-md border border-black"
        onClick={() => navigate("/test")}
      >
        previous page
      </button>
      <button
        className="p-2 rounded-md border border-black"
        onClick={() => navigate("/")}
      >
        Home page
      </button>
      <img src="/img/vite.svg" alt="vite" />
    </div>
  );
}

export default DynamicTest;
