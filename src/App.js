import React from 'react';
import './App.css';
//import {sum as add, multiple} from "./Math";
import Header from "./components/Header"

function App() {
    /*
    const sum = "SUM!";

    console.log(sum);
    console.log(add);
    console.log(multiple);
    */

    const cityName = "Seoul";

    return (
    <div className="App">
        <Header cityName={cityName} />
        <p>Hello World!</p>
    </div>
  );
}

export default App;
