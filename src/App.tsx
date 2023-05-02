import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import TestPage from "./pages/TestPage";
import DynamicTest from "./pages/DynamicTest";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/test/:id" element={<DynamicTest />} />
          {/* redirect */}
          <Route path="/lost" element={<Navigate to="/" />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
