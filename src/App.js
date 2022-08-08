import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/NavbarComponent';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import AboutMe from './Pages/AboutMe';
import ContactMe from './Pages/ContactMe';
import Main from './Views/Main';

function App() {
  return (
    <>
    <NavbarComponent/>
    <Main/>
    </>
  
  );
}

export default App;
