import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import "./styles/index.css";
import LoginPage from "./pages/Login/login";
import WelcomePage from "./pages/welcome/welcome"
import MainLayout from "./assets/MainLayout";
import RegisterPage from "./pages/Register/Register";


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
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<WelcomePage/>} outlet="main"/>
        </Route>
      </Routes>      
    </HashRouter>
  );
}

