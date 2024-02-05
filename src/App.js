import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { HookUseContext } from './components/HookUseContext';

function App() {
  return (
    <div className="App">
      <HookUseContext>
      <h1>Hooks - React</h1>
      <BrowserRouter>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;
