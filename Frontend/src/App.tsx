import { Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound/>}/>
        <Route path="/signup" element={<Signup/>} />

        {/* Protected Routes */}
      </Routes>
    </div>
  );
}

export default App;
