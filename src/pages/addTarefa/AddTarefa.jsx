import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";

import "./addTarefa.css";
import { saveTarefa } from "../../services/storeTarefas";

export default function AddTarefa() {

  const [novaTarefa, setNovaTarefa] = useState([]);

  const [nomeTarefa, setNomeTarefa] = useState('')

  const [tarefaFeita, setTarefaFeita] = useState(false)

 
  
  const auxTarefa = {
    descricao : nomeTarefa,
    feito : tarefaFeita
  }

  async function handleSaveTarefa() {
    if(nomeTarefa !== ""){
      saveTarefa('@storedTarefas', ...novaTarefa ,{...auxTarefa});
      setNomeTarefa('')

    }
  }

  return (
    <>
      <div className="container-add-tarefa">
        <div className="box-header">
          <div className="box-voltar">
            <Link to="/">
              <AiOutlineArrowLeft color="#439881" size={40} />
            </Link>
          </div>
          <div className="box-title">
            <h1>Adicione a sua Tarefa...</h1>
          </div>
        </div>
        <div className="box-form">
          <input
            type="text"
            // id="descricao"
            value={nomeTarefa}
            onChange={(e) => setNomeTarefa(e.target.value)}
          />
          <button onClick={handleSaveTarefa}>
            <AiOutlineSave color="#439881" size={30} />
          </button>
        </div>
      </div>
    </>
  );
}
