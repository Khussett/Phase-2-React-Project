import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate'; 
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit'; 
import About from './About';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'aqua', minHeight: '100vh' }}>
      <h1>Staff Solutions</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />} />
          <Route path='/employee/create' element={<EmpCreate />} />
          <Route path='/employee/detail/:empid' element={<EmpDetail />} />
          <Route path='/employee/edit/:empid' element={<EmpEdit />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
