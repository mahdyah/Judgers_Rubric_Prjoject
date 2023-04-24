
import React from 'react';
const Welcome = () => {
    return (
      <div className="container">
        <header>
          <h1 className="rtitle">Welcome Judgers</h1>
          {/* <p>You have successfully loged in.</p> */}
          {/* <h1 className="rtitle">Start Judging</h1> */}
        </header>
        <main>
          <div className='welcome'> 

          <div className="question">  
  <p>Please enter your Email: </p>
          <input
            type="text"
            placeholder='Email'
          />
          </div>
          <div className="question">  
  <p>Please enter your access code: </p>
          <input
            type="text"
            placeholder='Access Code'
          />
          </div>

          </div>


         
          <button class="button-72" id='join'>Join</button>
        </main>
      </div>
    );
  };
  
  export default Welcome;