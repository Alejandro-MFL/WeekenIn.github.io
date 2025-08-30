import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import LoginPage from "./pages/Login/login";
import RegisterPage from "./pages/Register/Register";

function Home() {
  return <h1>WekeendIn — Home</h1>;
}
function About() {
  return <h1>Acerca de Alejandro M. Fernández</h1>;
}

export default function App() {
  return (
    <HashRouter>
      <nav style={{display:"flex", gap:12, padding:12}}>
        <Link to="/">Inicio</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Registro</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        {/* tu home/dashboard */}
        <Route path="/" element={<h2>Home</h2>} />
      </Routes>      
    </HashRouter>
  );
}

