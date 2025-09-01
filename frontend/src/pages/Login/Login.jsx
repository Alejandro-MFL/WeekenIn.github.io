import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { login, me } from "../../features/auth/api";
import Card from "../../components/Card";

export default function LoginPage() {
  const [user, setU] = React.useState("");
  const [password, setP] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  // Si ya hay sesión válida, salta al dashboard (o donde quieras)
  React.useEffect(() => {
    (async () => {
      try {
        await me();
        navigate("/"); 
      } catch (_) {     
      }
    })();
  }, [navigate]);

  async function onSubmit(e) {
    e.preventDefault();                                     // evita recargar la página
    setError("");                                           // actualiza errores a nada
    setLoading(true);                                       // activa modo cargando
    try {
      const tokens = await login(user, password);          
      sessionStorage.setItem("access", tokens.access);
      sessionStorage.setItem("refresh", tokens.refresh);
      await me();                                           // verifica sesión
      navigate("/Home");                                        // destino tras login
    } catch (err) {
      setError(parseError(err));
    } finally {
      setLoading(false);
    }
  }

  return (

      <div style={{maxWidth: 420, margin: "40px auto", padding: 16}}><Card >
        <h1>Inicia sesión</h1>
        <form onSubmit={onSubmit} style={{display:"grid", gap:12}}>
          <label>
            Usuario 
            <span className="card" style={{padding:"6px 10px"}}>
               <input
                value={user}
                onChange={(e)=>setU(e.target.value)}
                placeholder="tu usuario"
                autoComplete="username"
              />
              </span>            
             
          </label>
          <label>
            Contraseña 
            <span className="card" style={{padding:"6px 10px"}}>
              <input
                value={password}
                onChange={(e)=>setP(e.target.value)}
                type="password"
                placeholder="tu contraseña"
                autoComplete="current-password"
              />
            </span>            
          </label>

          {error && <div style={{color:"crimson"}}>{error}</div>}

          <button disabled={loading || !user || !password}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

      <p style={{marginTop:12}}>
        ¿No tienes cuenta? <Link to="/">Regístrate</Link>
      </p>
    </Card></div>
  );
}

function parseError(err) {
  try {
    const msg = JSON.parse(err.message);
    if (msg?.detail) return msg.detail; // típico de DRF/SimpleJWT
  } catch {}
  return "Usuario o contraseña incorrectos";
}