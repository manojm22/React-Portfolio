import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import {Sample} from './Components/sample';
import {Asdf} from './Components/sample';
import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Experience, Works,Feedbacks, Hero,} from './Components';

const sample = () => {return( <div>"hello</div>)};


export default function App() {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <NavBar />
      <Hero />
    </div>
    </div>
    </BrowserRouter>
  );
}


