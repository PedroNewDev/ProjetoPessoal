import { useState } from "react";

export default function ConversorDesdobramento() {
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
    <div className="card">
      <h2>Desdobramento</h2>
      <input
        type="number"
        placeholder="Quantidade"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor da caixa (R$)"
        value={valorCaixa}
        onChange={(e) => setValorCaixa(e.target.value)}
      />
      <button onClick={calcular}>Calcular</button>
      <p>{resultado}</p>
    </div>
  );
}
