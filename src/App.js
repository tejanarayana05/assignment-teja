import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Test from "./Components/tests";
import Memory from "./Components/memory/Memory";
import Response from "./Components/response/Response";

function App() {
  return (
    <div className="App">
      
      <Home />
      <Test />
      <Memory />
      {/* <br/> */}
      <Response />
      <About />
      
    </div>
  );
}

export default App;
