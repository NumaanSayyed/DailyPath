import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Homepage'
import Admin from './Admin/AdminRoutineBuilder'
import Consumer from './consumer/ConsumerRoutineViewer'
import Header from './components/Header'
import Footer from './components/Footer'
import EnrollInRoutine from "./consumer/EnrollInRoutine";
import Signup from "./Signup";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />         
          <Route path="/routines" element={<Consumer/>} />
          <Route path="/enroll/:id" element={<EnrollInRoutine />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
