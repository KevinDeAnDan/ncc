import Content from "./component/Content";
import Navbar from "./component/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Content />
      </div>
      <div>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
