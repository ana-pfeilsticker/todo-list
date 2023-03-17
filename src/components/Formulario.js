import { useState } from 'react';
import './Formulario.css'

function Formulario({addItens}){

    const [tarefa, setTarefa] = useState('');
    const [id, setId] = useState(0);

    const createtask = (tarefa) =>{
        const taskobject = {text: tarefa, id: id};
        setId(id+1);
        addItens(taskobject);
    }


    return(
        <div className="formulario">
            <form>
                <input placeholder='Digite aqui sua tarefa' 
                onChange={(e) => setTarefa(e.target.value)}>
                </input>
                <input type="button" value="Add" onClick={() => createtask(tarefa)}/>
            </form>
        </div>

    );



}

export default Formulario