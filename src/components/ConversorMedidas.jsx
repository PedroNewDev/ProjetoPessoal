import { useState } from "react";

export default function ConversorMedidas() {
  const [valor, setValor] = useState("");
  const [unidade, setUnidade] = useState("m");
  const [resultado, setResultado] = useState("");

  const converter = () => {
    const v = parseFloat(valor);
    if (!v) return setResultado("Digite um valor válido.");

    let metros = 0;
    if (unidade === "m") metros = v;
    if (unidade === "cm") metros = v / 100;
    if (unidade === "mm") metros = v / 1000;
    if (unidade === "km") metros = v * 1000;

    setResultado(
      `m: ${metros} | cm: ${metros * 100} | mm: ${metros * 1000} | km: ${metros / 1000}`
    );
  };

  return (
    <div className="card">
      <h2>Conversor de Medidas</h2>
      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <select value={unidade} onChange={(e) => setUnidade(e.target.value)}>
        <option value="m">Metros</option>
        <option value="cm">Centímetros</option>
        <option value="mm">Milímetros</option>
        <option value="km">Quilômetros</option>
      </select>
      <button onClick={converter}>Converter</button>
      <p>{resultado}</p>
    </div>
  );
}
