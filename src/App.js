import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import AdminPanel from './components/AdminPanel';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home websiteName="Gadget Park"/>}></Route>
        <Route path='/admin-panel' element={<AdminPanel/>}></Route>
      
      </Routes>
    </Router>
    </>
  );
}

export default App;
