import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {AiOutlineSave} from 'react-icons/ai'

import "./addTarefa.css";

export default function AddTarefa() {

  const [novaTarefa, setNovaTarefa] = useState('');

  

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
            value={novaTarefa}
            onChange={(e)=>setNovaTarefa(e.target.value)}  
              
              />
            <button>
                <AiOutlineSave color="#439881" size={30} />
            </button>
        </div>

      </div>
    </>
  );
  

}
