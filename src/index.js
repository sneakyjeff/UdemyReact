// Import React and ReactROM libraries
import React from 'react'; 
import ReactDOM from 'react-dom';

// Create a React component
// this is a function component
const App = () => {
    const buttonText = 'Click me!'
    return (
        <div>
            <label for="name">Enter Your Name:</label>
            <input id="name" type="text"></input>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>
        </div>
    );
};

// Take the React component and display it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));