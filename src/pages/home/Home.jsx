import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Tarefas from "../../Components/tarefas/Tarefas";

export default function Home() {
  return (
    <>
      <div className="container-home">
        <div className="container-titulo">
          <h1>Lista de Tarefas</h1>
        </div>

        <div className="box-add"> 
            <Link className="botao-add" to="/addTarefa">Adicionar</Link>
        </div>

        <Tarefas />
      </div>
    </>
  );
}
