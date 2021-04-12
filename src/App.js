import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/index'
import './App.css';
import { applyNumber, changeOperation, clearDisplay, setMemory, applyMemory, resetMemory } from './actions/index'
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [ state, dispatch ] = useReducer(reducer, initialState)

  const appNum = (num) => {
    dispatch(applyNumber(num));
  }

  const chnOperation = (operation) => {
    dispatch(changeOperation(operation));
  }

  const display = () => {
    dispatch(clearDisplay())
  }

  

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => dispatch(setMemory())}value={"M+"}/>
              <CalcButton onClick={() => dispatch(applyMemory())} value={"MR"}/>
              <CalcButton onClick={() => dispatch(resetMemory())} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => appNum(1)} value={1}/>
              <CalcButton onClick={() => appNum(2)} value={2}/>
              <CalcButton onClick={() => appNum(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => appNum(4)} value={4}/>
              <CalcButton onClick={() => appNum(5)} value={5}/>
              <CalcButton onClick={() => appNum(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => appNum(7)} value={7}/>
              <CalcButton onClick={() => appNum(8)} value={8}/>
              <CalcButton onClick={() => appNum(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => chnOperation('+')} value={"+"}/>
              <CalcButton onClick={() => chnOperation('*')} value={"*"}/>
              <CalcButton onClick={() => chnOperation('-')} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => display()} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
