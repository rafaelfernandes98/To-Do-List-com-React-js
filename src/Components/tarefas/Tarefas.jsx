import React, { useState } from "react";
import "./tarefas.css";
import { CgTrash } from "react-icons/cg";

const Tarefas = () => {

  const [tarefas, setTarefas] = useState([
    {
      nome : "Limpar o quarto"
    },
    {
      nome : "Estudar"
    },
    {
      nome : "Trabalhar no projeto do App" 
    }

  ])

  return (
    <>
      <div className="container-tarefas">

        {tarefas.map(tarefa =>(
          <div className="box-tarefa">
          <h3>{tarefa.nome}</h3>
          <button>
            <CgTrash />
          </button>
        </div>
        ))}

      </div>
    </>
  );
};

export default Tarefas;
