import { useState } from "react";

export default function CalculadoraComum() {
  const [resultado, setResultado] = useState("");

  const clicar = (valor) => {
    if (valor === "C") setResultado("");
    else if (valor === "=") {
      try {
        setResultado(eval(resultado).toString());
      } catch {
        setResultado("Erro");
      }
    } else setResultado(resultado + valor);
  };

  const botoes = [
    "%", "C", "/", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", ".", "(", ")"
  ];

  return (
    <div className="box">
      <h2>Calculadora</h2>
      <div className="calc-display">{resultado || "0"}</div>
      <div className="calc-grid">
        {botoes.map((b, i) => (
          <button
            key={i}
            className={`calc-btn ${["/", "*", "-", "+", "="].includes(b) ? "op" : ""}`}
            onClick={() => clicar(b)}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}
