import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Staffing Solutions Simplified</h1>
      <div><a href="/" className="no-underline"><h3>Home</h3></a></div>
      <div><a href="/employee/about" className="no-underline"><h3>About</h3></a></div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>
          <Route path='/employee/home' element={<Home />}></Route>
          <Route path='/employee/about' element={<About />}></Route>
          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;