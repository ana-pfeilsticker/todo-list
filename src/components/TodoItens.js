import { useState } from 'react';
import { useEffect } from 'react';
import './TodoItens.css'
import EditorTodo from './EditorTodo';
import { MdOutlineCheckCircle, MdOutlineDelete } from "react-icons/md";
import { MdOutlineCancel, MdOutlineModeEditOutline } from "react-icons/md";


function TodoItens({iten, DelItens, EditarTodo, ValorBtn}){

    const [editor, setEditor] = useState(false)
    const [done, setDone] = useState(true)
    const [undone, setUndone] = useState(false)
    const [corundone, setCorUndone] = useState('#000000')
    const [cordone, setCorDone] = useState('#000000')
    useEffect(() => {
        setUndone(false)
        setCorDone(() => done ? '#000000': '#008000');
      }, [done]);


    useEffect(() => {
        setDone(true)
   
        setCorUndone(() => !undone ? '#000000': '#FF0000');

        }, [undone]);



    return(
        <div className="TodoIten">
            <EditorTodo open={editor} setEditor={setEditor} editor={editor} iten={iten} EditarTodo={EditarTodo}/>
            <div className="realizacao">
                <MdOutlineCheckCircle id={ValorBtn} onClick={()=>setDone(state=> !state)} style={{color:cordone, fontSize:'30px'}}></MdOutlineCheckCircle>
                <MdOutlineCancel id={ValorBtn} onClick={()=>setUndone(state=> !state)} style={{color:corundone, fontSize:'30px'}}></MdOutlineCancel>
            </div>

            <p>{iten.text}</p>

            <div className='EditaExclui'>
                <MdOutlineModeEditOutline onClick={() => setEditor(!editor)} style={{fontSize:'30px'}}></MdOutlineModeEditOutline>
                <MdOutlineDelete onClick={() => DelItens(iten.id)} style={{fontSize:'30px'}}></MdOutlineDelete>
            </div>

        </div>




    );

}

export default TodoItens