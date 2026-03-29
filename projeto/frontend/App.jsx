import { useEffect, useState } from "react";

export default function App() {
  const [mensagem, setMensagem] = useState("Carregando...");

  useEffect(() => {
    fetch("/api/mensagem")
      .then((res) => res.json())
      .then((data) => setMensagem(data.texto))
      .catch(() => setMensagem("Erro ao conectar com o backend"));
  }, []);

  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Projeto React + Node.js</h1>
      <p>{mensagem}</p>
    </main>
  );
}
