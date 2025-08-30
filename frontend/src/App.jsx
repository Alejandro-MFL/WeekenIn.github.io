import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
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
      <nav><Link to="/register">Registro</Link></nav>
        <Routes>
            <Route path="/register" element={<RegisterPage />} /> 
          </Routes>
    </HashRouter>
  );
}


