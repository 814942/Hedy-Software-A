import { Outlet } from "react-router-dom";

import Navbar from "./pages/navbar/Navbar";
import Footer from "./pages/footer/Footer";

const App = () => {
  return (
    <div id="app_container" className="h-screen bg-white-100">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;