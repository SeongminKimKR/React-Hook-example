import React from 'react';
import './App.css';
//import {sum as add, multiple} from "./Math";
import Header from "./components/Header"
import { BrowserRouter } from "react-router-dom";
import RouterApp from './RouterApp'
function App() {
    /*
    const sum = "SUM!";

    console.log(sum);
    console.log(add);
    console.log(multiple);
    */

    const cityName = "Seoul";

    console.log(BrowserRouter);
    return (
        <BrowserRouter>
            <RouterApp />
        </BrowserRouter>
  );
}

export default App;
