import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"
import VoyagePage from "./pages/VoyagePage"
import Traveler from "./pages/Traveler"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/voyage/:id" element={<VoyagePage />}></Route>
          <Route path="/traveler/:personaId/:viaggioId" element={<Traveler />} />
            {/*
            <Route path="/voyage/add-voyage" element={<div>Add Voyage</div>} />
            */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
