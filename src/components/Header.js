import logo from "../logo.svg";
import React from "react";

// ES5 function
//function Header( props ) {
// Header의 매개변수는 props 이고 => 기호를 통해 기능을 나타냄
// ES6 function (arrow function)
//const Header = (props) => {
const Header = ({cityName}) => {

    //console.log( props );
    //props = {cityName: 'Seoul'}
    //console.log(props.cityName);

    //ES5
    //const cityName = props.cityName;
    //ES6 외적으로 json 포맷과 비슷함
    //const { cityName } = props;

    return(
        <header className="App-header">
            <div>{cityName}</div>
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
        )
}

export default Header;