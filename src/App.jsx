import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
} from "./components";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Hero />
              </div>
              <About />
              <Experience />
              <Feedbacks />
              <div className="relative z-0">
                <Contact />
              </div>
            </div>
          }
          exact
        />
        <Route path="/about" element={<About />} exact />
        <Route path="/experience" element={<Experience />} exact />
        <Route path="/feedbacks" element={<Feedbacks />} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
    </BrowserRouter>
  );
}
