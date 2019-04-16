import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



/*
function formatName(mahasiswa) {
    return mahasiswa.first_Name + ' ' + mahasiswa.last_Name;
  }

  const mhs= {
    first_Name: 'Enno',
    last_Name: 'Destias'
  };
  

//const name = 'Enno';
const element = <h3>Hello, {formatName(mhs)}</h3>;


ReactDOM.render(element, document.getElementById('root'));
*/
/*
function tik() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tik, 1000);
*/

function HelloWorld (props){
    return <h1>Hello, {props.name} from Component (function)</h1>
}

ReactDOM.render(<HelloWorld name ="Enno Destias"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



