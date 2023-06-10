import React from "react";
import "../css/cadastro.css";

const Planos = () => {
  const planos = [
    {
      titulo: "Plano Básico",
      preco: "R$ 19,90/mês",
      recursos: ["Recurso 1", "Recurso 2", "Recurso 3"],
    },
    {
      titulo: "Plano Padrão",
      preco: "R$ 29,90/mês",
      recursos: ["Recurso 1", "Recurso 2", "Recurso 3", "Recurso 4"],
    },
    {
      titulo: "Plano Premium",
      preco: "R$ 49,90/mês",
      recursos: ["Recurso 1", "Recurso 2", "Recurso 3", "Recurso 4", "Recurso 5"],
    },
  ];

  return (
    <div className="container">
      <h1>Escolha o plano ideal para você</h1>
      <div className="planos">
        {planos.map((plano, index) => (
          <a key={index} href="#" className="plano">
            <h2>{plano.titulo}</h2>
            <p className="preco">{plano.preco}</p>
            <ul>
              {plano.recursos.map((recurso, index) => (
                <li key={index}>
                  <i className="fas fa-check"></i> {recurso}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Planos;
