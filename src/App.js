import React, { useState } from 'react';
import './Css/App.css'



function App() {

  const [Count, Counter] = useState(0)


  const decNum = () => {
    if(Count > 0){
      Counter(Count - 1)
    }
  }
  return (
    <>
      <div className="container-fluid p-0" id="Counter">
        <div className="row">
          <div className='col'>
            <h1 className='display-2 text-white text-center mt-5'>React Counter</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className='col'>
            <div className='box mt-5  '>
              <h5 className='display-1 fw-bold text-black text-center mt-5'>{Count}</h5>
              <div className='box-body text-center mt-5 pt-5'>
                <button onClick={decNum} type="button" className="btn btn-warning mx-2">Decrease</button>
                <button onClick={() => Counter(Count + 1)} type="button" className="btn btn-success mx-2">Increase</button>
                <button onClick={() => Counter(0)} type="button" className="btn btn-danger mx-2">Reset</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App;





