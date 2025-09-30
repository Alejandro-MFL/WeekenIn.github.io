import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import "./styles/index.css";
import InitLayout from "./assets/InitLayout";
import MainLayout from "./assets/MainLayout";
import FormLayout from "./assets/FormLayout";
import LoginPage from "./pages/Login/login";
import WelcomePage from "./pages/welcome/welcome"

import RegisterPage from "./pages/Register/Register";
import PlansPage from "./pages/Plans/Plans";


export default function App() {
  return (
    <HashRouter>
      

      <Routes>
           
        <Route path="/" element={<InitLayout/>}>
          <Route index element={<RegisterPage/>}/>
        </Route>
        <Route path="/Home" element={<MainLayout/>}>
          <Route index element={<WelcomePage/>}/>
        </Route>
        <Route path="/Plans" element={<FormLayout/>}>
          <Route index element={<PlansPage/>}/>
        </Route>
        <Route path="/login" element={<FormLayout/>}>
          <Route index element={<LoginPage/>}/>
        </Route>
        
      </Routes>      
    </HashRouter>
  );
}

