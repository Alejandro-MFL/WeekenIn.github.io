import React from "react";
import { register, login, me } from "../../features/auth/api";

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
        <form onSubmit={onSubmit}>
            <input value={user} onChange={e=>setUser(e.target.value)} placeholder="usuario" />
            <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="contraseña" />
            <button>Registrarme</button>
            <pre>{out}</pre>
        </form>
    );
}