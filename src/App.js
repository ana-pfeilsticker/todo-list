
import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import TodoItens from './components/TodoItens';


function App() {

  const [itens, setItens] = useState([]);


  const addItens = (iten) => {
    console.log(iten);
    setItens([...itens, iten]);
  };

  const DelItens = (id) => {
    var FilteredItens = itens.filter((iten) => iten.id !== id);
    setItens(FilteredItens);
  }

  const EditarTodo = (id, EditedText) =>{
    var itenscopy = [...itens];
    for (var i in itenscopy){
      if(itenscopy[i].id == id){
        itenscopy[i].text = EditedText
      }
    }
      
      setItens(itenscopy);
  }

  return (
    <div className="App">
     <h1>TO DO LIST</h1>
     <Formulario addItens={addItens}/>
     <div>
      {itens.map((iten) => (
        <TodoItens key={iten.id} iten={iten} DelItens={DelItens} EditarTodo={EditarTodo} ValorBtn={iten.id}/>
      ))}

     </div>
     
    
    </div>
  );
}

export default App;
