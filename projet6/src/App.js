import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from "./pages/NotFound";
import RentDetails from "./pages/RentDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path=":id" element={<RentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
