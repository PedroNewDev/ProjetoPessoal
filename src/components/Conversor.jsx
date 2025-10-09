import { useState } from "react";
import "./conversor.css";

export default function Conversor() {
  const [quantidade, setQuantidade] = useState("");
  const [valorCaixa, setValorCaixa] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = () => {
    const qtd = parseFloat(quantidade);
    const valor = parseFloat(valorCaixa);

    if (!qtd || !valor || qtd <= 0) {
      setResultado("Preencha todos os campos corretamente.");
      return;
    }

    const valorUnitario = valor / qtd;
    setResultado(`Cada unidade custa R$ ${valorUnitario.toFixed(2).replace(".", ",")}`);
  };

  return (
    <div className="conversor-page">
      <div className="conversor-container">
        <h1>Conversor de Desdobramento</h1>
        <p>Descubra o valor unitário de cada produto.</p>

        <input
          type="number"
          placeholder="Ex: 12"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />
        <input
          type="number"
          placeholder="Ex: 500"
          value={valorCaixa}
          onChange={(e) => setValorCaixa(e.target.value)}
        />
        <button onClick={calcular}>Calcular</button>

        {resultado && <p className="resultado">{resultado}</p>}
      </div>
    </div>
  );
}
