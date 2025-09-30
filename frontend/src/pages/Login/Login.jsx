import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { login, me } from "../../features/auth/api";


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

      <div className= "card" style={{width: "500px", maxHeight:"400px"}}>
        <h1>Inicia sesión</h1>
        <form onSubmit={onSubmit} style={{ position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
          <div>
            Usuario  
          </div>
          <span >
               <input
                value={user}
                onChange={(e)=>setU(e.target.value)}
                placeholder="tu usuario"
                autoComplete="username"
              />
          </span>        
          <label>
            Contraseña               
          </label>
          <span>
              <input
                value={password}
                onChange={(e)=>setP(e.target.value)}
                type="password"
                placeholder="tu contraseña"
                autoComplete="current-password"
              />
            </span>          

          {error && <div style={{color:"crimson"}}>{error}</div>}
          <div style={{padding:"20px 10px"}}>
            <button disabled={loading || !user || !password}>
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </div>
        </form>

        <p style={{marginTop:12}}>
          ¿No tienes cuenta? <Link to="/">Regístrate</Link>
        </p>
      </div>
  );
}

function parseError(err) {
  try {
    const msg = JSON.parse(err.message);
    if (msg?.detail) return msg.detail; // típico de DRF/SimpleJWT
  } catch {}
  return "Usuario o contraseña incorrectos";
}