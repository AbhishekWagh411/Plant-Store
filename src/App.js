import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Imagesec from './components/Image Section/Imagesec';
function App() {
  return (
    <div className='parentclass'>
    <Navbar></Navbar>
    <Imagesec></Imagesec>
    </div>
  )
}

export default App;
