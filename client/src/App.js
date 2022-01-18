import Header from "./components/header";
import Quote from "./components/quote";
import Filter from "./components/filter";
import Course from "./components/course";

const styleContent = {
  width: "min(90%, 1200px)",
  marginInline: "auto",
};

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content" style={styleContent}>
        <Quote />
        <Filter />
        <Course />
      </div>
    </div>
  );
}

export default App;

console.log("my name is phan tan thang handsome");
