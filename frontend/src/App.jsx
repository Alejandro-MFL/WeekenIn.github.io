import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import "./styles/index.css";
import InitLayout from "./assets/InitLayout";
import LoginPage from "./pages/Login/login";
import WelcomePage from "./pages/welcome/welcome"
import MainLayout from "./assets/MainLayout";
import RegisterPage from "./pages/Register/Register";


export default function App() {
  return (
    <HashRouter>
      

      <Routes>
        <Route path="/login" element={<LoginPage/>} />        
        <Route path="/" element={<InitLayout/>}>
          <Route index element={<RegisterPage/>}/>
        </Route>
        <Route path="/Home" element={<MainLayout/>}>
          <Route index element={<WelcomePage/>}/>
        </Route>
      </Routes>      
    </HashRouter>
  );
}

