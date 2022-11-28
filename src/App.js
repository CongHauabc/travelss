import './App.css';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Detai from './Components/Detail/Detai';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>
      <Routes>
        <Route path="/detai/:id" element={<Detai/>} />
      </Routes>
    </div>
  );
}

export default App;
