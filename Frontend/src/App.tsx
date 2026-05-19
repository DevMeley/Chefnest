import { Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Chefs from "./pages/chefs";
import ChefDetail from "./pages/ChefDetail";
import ChefPersonal from "./pages/ChefPersonal";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/chefs" element={<Chefs/>}/>
        <Route path="/chef/:id" element={<ChefDetail/>}/>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/chef-personal/:id" element={<ChefPersonal/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
