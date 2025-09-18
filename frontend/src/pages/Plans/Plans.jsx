import React from "react";
import { Link } from "react-router-dom";
import { getPlans,deletePlans,updatePlans} from "../../features/days/api";

import { useNavigate } from "react-router-dom";


export default function AllPlans() {    
    /*Valores de plan nuevo */
    const [nombre, setNombre] = React.useState("");
    const [zona, setZona] = React.useState("");
    const [precio, setPrecio] = React.useState("");
    const [provincia, setProvincia] = React.useState("");
    const [plans, setPlans] = React.useState([]);
    const [showForm, setShowForm] = React.useState(false);
    const navigate = useNavigate();
    
    async function deletePlanButton(PlanId){  
        try {
            console.log(PlanId);
            await deletePlans(PlanId);
            navigate(0);
        }
        finally {  
                       
        }
    }
     async function updatePlan(){  
        try {
            console.log(nombre, precio,zona,provincia)
            await updatePlans(nombre, precio,zona,provincia)
            navigate(0);
            }
        finally {  
                               
        }
    }

    React.useEffect(() => {
          
        (async () => {
        try {
            const d = await getPlans();
            setPlans(d); 
            console.log(d);
        } catch (e) {
            console.error(e);
        }
        })();
    }, []);
        /*
    async function onSubmitDelete(e) {
        e.preventDefault();                                     // evita recargar la página
        setError("");                                           // actualiza errores a nada
        setLoading(true);                                       // activa modo cargando
        try {
          const tokens = await deletePlans(user, password);   
          await me();                                           // verifica sesión
          navigate("/Home");                                        // destino tras login
        } catch (err) {
          setError(parseError(err));
        } finally {
          setLoading(false);
        }
      }*/


    return (
    <>          
        
       
        <div className="card s8" style={{placeItems: "center", position:"relative"}}>
             
            <h>Tus planes</h>
            <button className="savebutton" onClick={()=> setShowForm(!showForm)} >Nuevo plan</button>   
            <ul className="listas"> 
                {plans.map(pl=> <li key={pl.id} >
                        <span> {pl.nombre} </span>
                        <button style={{position:"absolute",right:40}} value={pl.id} onClick={()=>deletePlanButton(pl.id)} id="minibutton" >❌</button>
                    </li>
                
                )}             
                    
            </ul>
        </div> 
         
        {showForm && (
         <div className="modal-overlay">
            <div className="form-container">
                
                <div className="card s8" style={{maxWidth: 420, margin: "40px auto", padding: 16}}>
                        
                        <h2>Nuevo plan<button  id="minibutton" onClick={()=> setShowForm(!showForm)}>❌</button></h2>
                        <form  onSubmit={updatePlan} style={{display:"grid", gap:12}}>
                            
                            <label>
                            Tu plan
                            <span className="card" style={{padding:"6px 10px"}}>
                                <input
                                value={nombre}
                                onChange={(e)=>setNombre(e.target.value)}
                                placeholder="¿Qué quieres hacer?"                          
                                />
                                </span>
                            </label>
                            <label>
                            Interior o exterior *Opcional
                            <span className="card" style={{padding:"6px 10px"}}>
                                <select
                                value={zona}
                                onChange={(e)=>setZona(e.target.value)}>
                                    {<option value="" disabled>-- Selecciona --</option>}
                                    <option value="EX">Exterior</option>
                                    <option value="IN">Interior</option>                            
                                </select>                          
                            
                            </span>            
                            </label>
                            <label>
                            Precio *Opcional
                            <span className="card" style={{padding:"6px 10px"}}>
                                <select
                                value={precio}
                                onChange={(e)=>setPrecio(e.target.value)} >
                                    {<option value="" disabled>-- Selecciona --</option>}
                                    <option value="BA">Barato</option>
                                    <option value="ME">Medio</option>  
                                    <option value="CA">Caro</option>                            
                                </select>  
                            </span>            
                            </label>
                            <label>
                            ¿En qué provincia es? *Opcional
                            <span className="card" style={{padding:"6px 10px"}}>
                                <input
                                value={provincia}
                                onChange={(e)=>setProvincia(e.target.value)}
                                placeholder="¿Será para ver el tiempo?"                          
                                />
                                </span>
                            </label>

                            {/*{error && <div style={{color:"crimson"}}>{error}</div>}
                
                            <button disabled={loading || !user || !password}>
                            {loading ? "Entrando..." : "Entrar"}
                            </button>*/}
                            <span className="card" style={{padding:"6px 10px"}}>
                                <button disabled={!nombre}>
                                {!nombre ? "Falta el plan" : "Guardar"}
                                </button>
                            </span>
                        </form>
                
                        </div>
                </div>
            </div>
      )}
    </>
    )
}

  
