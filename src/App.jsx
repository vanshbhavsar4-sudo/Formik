import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactForm from "./pages/ContactForm";
import SignupForm from "./pages/SignupForm";
import FeedbackForm from "./pages/FeedbackForm";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        <Navbar />

        <Routes>
          <Route path="/" element={<ContactForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;