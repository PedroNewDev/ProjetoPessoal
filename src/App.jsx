import ConversorDesdobramento from "./components/ConversorDesdobramento";
import CalculadoraComum from "./components/CalculadoraComum";
import ConversorMedidas from "./components/ConversorMedidas";
import "./components/Conversor.css";

function App() {
  return (
    <div className="app-container">
      <header className="titulo-principal">
        <h1>Centro de Cálculos</h1>
        <p>Três calculadoras em um único lugar</p>
      </header>
      
      <main className="calculadoras-container">
        <div className="box">
          <ConversorDesdobramento />
        </div>
        <div className="box">
          <CalculadoraComum />
        </div>
        <div className="box">
          <ConversorMedidas />
        </div>
      </main>
    </div>
  );
}

export default App;
