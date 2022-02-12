import { useEffect } from "react";
import "./App.css";
import { IziSuccess } from "./Components/iziNotify";

function App() {
  useEffect(() => {
    window.onload = IziSuccess("Welcome");
  });
  return (
    <div className="App">
      <header className="App-header ">Hello Redux</header>
    </div>
  );
}

export default App;
