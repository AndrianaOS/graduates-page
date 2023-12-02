import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import GraduatesPage from "./pages/GraduatesPage/GraduatesPage";
import GraduateForm from "./pages/GraduateForm/GraduateForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/graduates" element={<GraduatesPage />} />
        <Route path="/form" element={<GraduateForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
