import React from "react";
import Card from "../../components/Card";
import { getSummary, getPlans, getMonth } from "../../features/home/api";




export default function Home(){
    const [summary, setSummary] = React.useState(null);
    const [plans, setPlans] = React.useState([]);
    const [calendar, setCalendar] = React.useState(null);

    React.useEffect(() => {
        const today = new Date();
        const y = today.getFullYear();
        const m = today.getMonth() + 1;

        (async () => {
        try {
            const [s, p, cal] = await Promise.all([
            getSummary(),
            getPlans(10),
            getMonth(y, m),
            ]);
            setSummary(s);
            setPlans(p.results || p);   // por si usas paginación luego
            setCalendar(cal);
        } catch (e) {
            console.error(e);
        }
        })();
    }, []);






  return (
    <>          
        <div className="grid">
            {/*Dias para finde*/}
            <div className="col-4"><Card title="¿Días para Weekend?">
                {summary
                ? <p> {summary.days_to_weekend ?? "—"}</p>
                : <p>Cargando…</p>}
            </Card></div>
            {/*Planes*/}
            <div className="col-8"><Card title="Tus planes">
            <ul>            
                {plans.slice(0,10).map(pl=> <li key={pl.id}>{pl.nombre}</li>)}      
            </ul>
            </Card></div>
            {/*Calendario*/}
            <div className="col-12"><Card title="Mes">
             {/*calendar ? <Calendario cal={calendar} /> : <p>Cargando…</p>*/}
            </Card></div>

        </div>
    </>);
};






/*
  
export default function Muestra(){
  return (<>
       
      <div className="grid">
        <div className="col-4"><Card title="¿Días para Weekend?">
          <ul>
            <li>aquí numero de dias para l</li>
            <li></li>
          </ul>
        </Card></div>

        <div className="col-8"><Card title="Meetzed" subtitle="Graphic Designer · 2020 — 2021">
          <ul>
            <li>bloque C</li>
            <li>con columnas</li>
          </ul>
        </Card></div>

        <div className="col-6"><Card title="Design Tools">
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            <span className="card" style={{padding:"6px 10px"}}>Bd</span>
            <span className="card" style={{padding:"6px 10px"}}>Be</span>
            <span className="card" style={{padding:"6px 10px"}}>Bf</span>
          </div>
        </Card></div>

        <div className="col-6"><Card title="Education">
          <div className="muted">Bloque g</div>
          <div className="muted">blablabla</div>
          <div className="muted">blablabla2</div>
        </Card></div>

        <div className="col-12"><Card title="Portfolio">
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            {["Bento","Behance","Instagram","YouTube","Dribbble"].map(x=>(
              <span key={x} className="card" style={{padding:"8px 12px"}}>{x}</span>
            ))}
          </div>
        </Card></div>
      </div>
    </>);
};*/
