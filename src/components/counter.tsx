import { useState } from "react";

export function Counter() {

  // let counter : number = 0;
  const [counter, setCounter] = useState<number>(0);
  
  
  function add() {
        setCounter(counter + 1);
    }
    function less(){
          setCounter(counter - 1);
    }
    return(
      <>
      <h1>{counter}</h1>
      <button onClick={add}>+</button>
      <button onClick={less}>-</button>
      </>
    )
  }
