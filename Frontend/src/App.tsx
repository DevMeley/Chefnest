import { Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound/>}/>

        {/* Protected Routes */}
      </Routes>
    </div>
  );
}

export default App;
