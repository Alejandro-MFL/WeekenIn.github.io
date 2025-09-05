import React from "react";
import Card from "../../components/Card";
import { getPlans, getDays } from "../../features/home/api";
import CalendarGrid from "../../components/CalendarGrid";





export default function Home(){
    //Los valores de la cuenta de fin de semana
    const [titleWeekend, setTitleWeekend] = React.useState("Cargando…");
    const [toWeekend, setToWeekend] = React.useState("");
    const [plans, setPlans] = React.useState([]);
    const [days, setDays] = React.useState([]);
    const [firstDay, setFirstDay] = React.useState("Cargando…");
    
    function toISO(d) {
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    }
    

    React.useEffect(() => {
        
        let today = new Date();
        let toWeek = 6 - today.getDay();
        let toMonday = today;
        toMonday.setDate(toMonday.getDate()-(today.getDay()-1))
        console.log(toMonday);
        setFirstDay(toISO(toMonday));        
        if (today.getDay() < 5) 
        {                   
          setToWeekend(toWeek);
          setTitleWeekend("Días para Weekend");        
        }
        else
        {
          setTitleWeekend("Ya estamos en Weekend");
          setToWeekend("¿Qué quieres hacer hoy?");
        }
        
        (async () => {
        try {
            const [p, d] = await Promise.all([            
            getPlans(10),
            getDays(),
            ]);

            setPlans(p.results || p);   // por si usas paginación luego
            setDays(d);
            console.log(d);
        } catch (e) {
            console.error(e);
        }
        })();
    }, []);

  return (
    <>          
        <div className="grid">
            {/*Dias para finde*/}
            <div className="col-4"><Card title={titleWeekend} >
                {<h2>{toWeekend}</h2>}
            </Card></div>
            {/*Planes*/}
            <div className="col-8"><Card title="Tus planes">
            <ul>            
                {plans.slice(0,10).map(pl=> <li key={pl.id}>{pl.nombre}</li>)}      
            </ul>
            </Card></div>
            {/*Calendario*/}
            <div className="col-12"><Card title="Mes">  
              {console.log(days)}            
             {<div className="col-4"><CalendarGrid days={days} firstDay={firstDay} title={titleWeekend} >
                {<h2>{toWeekend}</h2>}                
              </CalendarGrid></div>
             /*calendar ? <Calendario cal={calendar} /> : <p>Cargando…</p>*/}
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
