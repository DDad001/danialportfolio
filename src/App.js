import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/NavbarComponent';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';

function App() {
  return (
    <>
    <Home/>
    <Resume/>
    <Projects/>
    </>
  
  );
}

export default App;
