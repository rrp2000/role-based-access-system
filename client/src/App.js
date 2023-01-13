import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Signup from './signup/Signup';
import Login from './login/Login';
import Navbar from './navbar/Navbar';
import Admin from './admin/Admin';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
