import React from "react";
import { register, login, me } from "../../features/auth/api";

import { useNavigate, Link } from "react-router-dom";


export default function RegisterPage() {
        
    const [user, setUser] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [out, setOut] = React.useState("");

    async function onSubmit(e) {
        e.preventDefault();
        try {
            // crea usuario
            await register(user, password);                   // crea usuario
            const tokens = await login(user, password);        // consigue tokens y los guarda en sessionStorage            
            sessionStorage.setItem("access", tokens.access);
            sessionStorage.setItem("refresh", tokens.refresh);
            const yo = await me();              // prueba /api/me con Authorization: Bearer
            setOut(`Hola ${yo.username} (id=${yo.id})`);
        } catch (err) {
            setOut(`Error: ${err.message}`);
        }
    }

    return (
        <>
          
    
          <div className="grid">
            <div className="card 8">
                <h2>Aprovecha tus fines de semana</h2>
                <h3>Con la mejor web para organizar tus fines de semana</h3>
                <ul>
                    <li>Apunta los planes que siempre quisiste hacer</li>
                    <li>Gestiona tus dias libres, puentes vacaciones...</li>
                    <li>Organizate según el clima y el tiempo que tengas</li>
                </ul>
                <h2>Y disfruta de tu finde semana con WeekendIn!</h2>                
            </div>

            <div className="card 4">
                <h3>Registrate</h3>
                <form onSubmit={onSubmit}>
                     <span className="card" style={{padding:"6px 10px"}}>
                        <input value={user} onChange={e=>setUser(e.target.value)} placeholder="usuario" />
                     </span>
                    <span className="card" style={{padding:"6px 10px"}}>
                        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="contraseña" />
                    </span>
                    <span className="card" style={{padding:"6px 10px" }}>
                        <button>Registrarme</button>
                    </span>
                    <p style={{marginTop:12}}>
                        ¿Ya tienes cuenta? <Link to="/login">Entra</Link>
                    </p>
                    
                   
                    
                    <pre>{out}</pre>
                </form> 
            </div>
    
    
          </div>
        </>
      );

}