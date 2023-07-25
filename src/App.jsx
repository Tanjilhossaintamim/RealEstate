import "./App.css";
import Companies from "./components/companies/Companies";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Residancis from "./components/residancis/Residancis";
import Value from "./components/value/Value";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradiant"></div>

        <Header />
        <Hero />
      </div>
      <Companies />
      <Residancis />
      <Value />
    </div>
  );
}

export default App;
