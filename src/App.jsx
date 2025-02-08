import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import Admin from './Admin/AdminRoutineBuilder';
import AdminSignup from "./Admin/AdminSignup";
import Consumer from './consumer/ConsumerRoutineViewer';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactUs from "./components/ContactUs";
import Progress from "./components/Progress";
import EnrollInRoutine from "./consumer/EnrollInRoutine";
import Signup from "./Signup";
import Login from "../src/components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/AdminSignup" element={<AdminSignup />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/routines" element={<Consumer />} />
          <Route path="/enroll/:id" element={<EnrollInRoutine />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;