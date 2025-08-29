import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Home() {
  return <h1>WekeendIn — Home</h1>;
}
function About() {
  return <h1>Acerca de Alejandro M. Fernández</h1>;
}

export default function App() {
  return (
    <HashRouter>
        <nav style={{ display: "flex", gap: 12, padding: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/about">Acerca</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
  );
}


