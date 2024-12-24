import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Homepage'
import Admin from './Admin/AdminRoutineBuilder'
import Consumer from './consumer/ConsumerRoutineViewer'
import Header from './components/Header'
import Footer from './components/Footer'

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
          <Route path="/consumer" element={<Consumer/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
