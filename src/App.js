import React, {useState} from "react";
import Footer from "./components/Footer";

function App() {

  const [calc,setCalc] = useState('');
  const [result, setResult] = useState('');

  const ops = ['/','*','-','+'];

  const updateCalc = value => {
    if ( 
      (ops.includes(value) && calc === '') || 
      (ops.includes(value) && ops.includes(calc.slice(-1))) 
      )
      //  if the last entered value is an operator & calculation has nothing OR 
      // if the last entered value is an operator & its previous value is also an operator, THEN return
    {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)){
      setResult(eval(calc + value).toString());
    }

  }

  const createDigits = () => {
    const digits = [];

    for (let i=1 ; i < 10 ; i++) {
      digits.push(
        <button 
          key={i}
          onClick={() => updateCalc(i.toString())} >
          {i}
        </button>
      )
    }

    return digits;
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
    setResult(eval(calc).toString());
  }

  const deleteLast = () => {
    if (calc === '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  }

  return (
    <div className="App">
      <div className="calculator">

        <div className="history">
          <span className="history">{ calc || '0' }
        </span></div>

        <div className="display">
          {result ? <span className="ans">{result}</span> : '0'}
          {/* &nbsp; */}
          {/* <span className="history">({ calc || "0" })</span> */}
        </div>

        <div className="operators">
          <button onClick={ () => updateCalc('/')}><i class="fa-solid fa-divide"></i></button>
          <button onClick={ () => updateCalc('*')}><i class="fa-solid fa-xmark"></i></button>
          <button onClick={ () => updateCalc('-')}><i class="fa-solid fa-minus"></i></button>
          <button onClick={ () => updateCalc('+')}><i class="fa-solid fa-plus"></i></button>
          <button id="del" onClick={deleteLast}><i class="fa-solid fa-delete-left"></i></button>
        </div>

        <div className="digits">
          { createDigits() }
          <button onClick={ () => updateCalc('0')}>0</button>
          <button onClick={ () => updateCalc('.')}>.</button>
          <button id="eq" onClick={calculate}><i class="fa-solid fa-equals"></i></button>
        </div>

      </div>
      <Footer />
    </div>
  );

}

export default App;
