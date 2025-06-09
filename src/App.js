import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import {Sample} from './Components/sample';
import {Asdf} from './Components/sample';


const sample = () => {return( <div>"hello</div>)};


export default function App() {
  return (
    <div className="App">
      <Header/>
      <Sample/>
      {sample()}
      <Asdf/>
    </div>
  );
}


