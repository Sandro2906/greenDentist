import {BrowserRouter, Routes, Route} from "react-router-dom"
import { HomePage } from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";

import ContactPage from "./pages/ContactPage";
import CarrersPage from './pages/CarrersPage';

function App() {
  return (
    <div className="overflow-hidden font-dentist">
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/"/>
          <Route element={<ServicesPage />} path="/services" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<CarrersPage />} path="/carrer" />
          <Route element={<ContactPage />} path="/contact" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
