// import logo from './logo.svg';
import './App.css';
// import { useState } from "react";
// import PlantDetailsForm from './Components/PlantDetailsForm';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        Main Page<br/><br/>
      {/* </header> */}
      <Link to='PlantDetailsForm'>PlantDetailsForm</Link>
    </div>
  );
}

export default App;

