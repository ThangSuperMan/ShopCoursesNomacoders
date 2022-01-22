import { useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Quote from "./components/quote";
import Filter from "./components/filter";
import Course from "./components/course";
import Footer from "./components/footer";
import "./components/responsive.css";
import Axios from "axios";

const styleContent = {
  width: "min(90%, 1200px)",
  marginInline: "auto",
  position: "relative",
  zIndex: "1",
  overflow: "hidden",
};

function readDataBackend() {
  console.log("click  ");
  Axios.get("http://localhost:3001").then((response) => {
    console.log(response);
    console.log(response.data);
  });
}

function App() {
  useEffect(() => {
    console.log("use effect ");

    //const baseURL = "https://localhot:3005";

    //Axios.get("http://localhost:3005/").then((res) => {
    //console.log(res);
    //});
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content" style={styleContent}>
        <Quote />
        <Filter />
        <Course />
        <Footer />
        <button onClick={readDataBackend}>read data backend</button>
      </div>
    </div>
  );
}

export default App;
