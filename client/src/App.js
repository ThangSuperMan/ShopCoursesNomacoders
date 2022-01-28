import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Axios from "axios";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/index";
import Login from "./pages/login";
import "./components/responsive.css";
import "./components/course.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" elemnt={<Login />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
console.log("hello");
