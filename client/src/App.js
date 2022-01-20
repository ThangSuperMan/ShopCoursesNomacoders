import "./App.css";
import Header from "./components/header";
import Quote from "./components/quote";
import Filter from "./components/filter";
import Course from "./components/course";
import Footer from "./components/footer";
import "./components/responsive.css";

const styleContent = {
  width: "min(90%, 1200px)",
  marginInline: "auto",
  position: "relative",
  zIndex: "1",
  overflow: "hidden",
};

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content" style={styleContent}>
        <Quote />
        <Filter />
        <Course />
        <Footer />
      </div>
    </div>
  );
}

console.log("hello");

export default App;
