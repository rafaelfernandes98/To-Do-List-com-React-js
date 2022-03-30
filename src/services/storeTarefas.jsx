// salvar tarefas

export async function getSaveTarefa(key){

    const myTarefas = await localStorage.getItem(key)

    let tarefaSave = JSON.parse(myTarefas) || []

    return tarefaSave
}

export async function saveTarefa(key, novaTarefa){

    let tarefasStored = await getSaveTarefa(key)

    tarefasStored.push(novaTarefa)

    await localStorage.setItem(key, JSON.stringify(tarefasStored))

    console.log('tarefa salva com sucesso')

}

export function deleteTarefa(tarefas, indice){

    let myTarefas = tarefas.filter((item, id)=>{

        return(id !== indice)

    })

    localStorage.setItem('@storedTarefas', JSON.stringify(myTarefas))

    return myTarefas

}