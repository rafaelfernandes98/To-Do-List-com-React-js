import React, { useEffect, useState } from "react";
import "./tarefas.css";
import { CgTrash } from "react-icons/cg";
import { deleteTarefa, getSaveTarefa } from "./../../services/storeTarefas";


const Tarefas = () => {
  const [emptyTarefas, setEmptyTarefas] = useState(false);

  const [tarefas, setTarefas] = useState([]);



  useEffect(() => {
    async function getTarefas() {
      const result = await getSaveTarefa("@storedTarefas");

      if(result.length === 0) {
        setEmptyTarefas(true);
      }

      setTarefas(result);
    }

    getTarefas();
  }, []);

  async function handleDelete(indice){
    const result = await deleteTarefa(tarefas, indice)

    if(result.length === 0) {
      setEmptyTarefas(true);
    }

    setTarefas(result)
    
  }
  


  return (
    <>
        
      <div className="container-tarefas">
        {emptyTarefas && (
          <div>
            <h3 style={{color: 'lightgray'}}>Sem tarefas no momento...</h3> 
          </div>
        )}

        {tarefas.map((tarefa, indice)=>(
          <div key={indice} className="box-tarefa">

           <h3 className="" id="title">{tarefa.descricao}</h3> 
            
            <button onClick={()=>handleDelete(indice)}>
              <CgTrash />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tarefas;
