import { useState } from "react"


function EditorTodo({open, setEditor, editor, iten, EditarTodo}){

    const [EditedText, setEditedText] = useState(iten.text)

    const ChangeText = () =>{
        EditarTodo(iten.id, EditedText)
        setEditor(!editor)
    }

    return(
        <div>
            <dialog open={open}>
                <h2>Edite a sua tarefa</h2>
                <form>
                    <input defaultValue={iten.text} onChange={(e) => setEditedText(e.target.value)}>
                    </input>
                    <input type="button" value="Editar" onClick={ChangeText}/>
                    <input type="button" value="Cancelar" onClick={() => setEditor(!editor)}/>

                </form>
            </dialog>
        </div>
    )
}

export default EditorTodo