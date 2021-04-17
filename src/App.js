import logo from "./logo.svg";
import "./App.css";
import Head from "./components/Filters/Head";
import Main from "./components/main/Main";
import { CovidContextProvider } from "./Contexts/CovidContext";

function App() {
  return (
    <CovidContextProvider>
      <div className="App">
        <header className="App-header">
          <Head />
        </header>
        <Main />
      </div>
    </CovidContextProvider>
  );
}

export default App;
