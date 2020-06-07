import React, {useState} from 'react';
import './App.css';

import Header from './Header';
function Counter() {
  //let counter = 1;
  //imutabilidade nao permite alteracao direta para melhora de performance
  const [counter, setCounter] = useState(0);//[valor do estado, funcao ppara atualizar o valor do estado]

  function handleButtonCLick(){
    //console.log('oi');
     //counter++;
     setCounter(counter+1);
  }

  return (
      <div>
        <Header title={`Contador: ${counter}`}/>
        <h1>{counter}</h1>
        <h1>{counter*2}</h1>
        {/* <button type="button" onClick={console.log}>Aumentar</button> */}
        <button type="button" onClick={handleButtonCLick}>Aumentar</button>
      </div>
  );
}

export default Counter;
