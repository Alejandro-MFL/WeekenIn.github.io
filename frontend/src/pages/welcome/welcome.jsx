import React from "react";

import { getPlans10, getDays } from "../../features/home/api";
import CalendarGrid from "../../components/CalendarGrid";
import { useNavigate } from "react-router-dom";
import lapicerito from "../../../public/lapiz.png"



export default function Home(){
    //Los valores de la cuenta de fin de semana
    const [titleWeekend, setTitleWeekend] = React.useState("Cargando…");
    const [toWeekend, setToWeekend] = React.useState("");
    const [plans, setPlans] = React.useState([]);
    const [days, setDays] = React.useState([]);
    const [firstDay, setFirstDay] = React.useState("Cargando…");
     const [showForm, setShowForm] = React.useState(false);
    const navigate = useNavigate();

    function toISO(d) {
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    }
    function GoPlans() {
      navigate("/Plans")
    }

    React.useEffect(() => {
        
      let today = new Date();
      let toWeek = 6 - today.getDay();
      let toMonday = today;
      toMonday.setDate(toMonday.getDate()-(today.getDay()-1))        
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
          getPlans10(10),
          getDays(),
          ]);

          setPlans(p.results || p);   // por si usas paginación luego
          setDays(d);
          console.log(p);
          console.log(d);
      } catch (e) {
          console.error(e);
      }
      })();
    }, []);

  return (
    <>         
      {/*Dias para finde*/}
      <div className="card s4">
        <h3>{titleWeekend}</h3>
        {<h2>{toWeekend}</h2>}
      </div>

      {/*Planes*/}
      <div className="card s8">
        
        <h2>Tus planes
          <button className="minibutton" style={{paddingLeft:10}} onClick={()=> GoPlans()}>
          <img src={lapicerito} alt="lapicerito" style={{padding:0, width: "20px", height: "20px" }} />
        </button></h2>
        
        <ul className="listas">            
            {plans.slice(0,10).map(pl=> <li key={pl.id}>{pl.nombre}</li>)}      
        </ul>
      </div>

      {/*Calendario*/}
      <div className="card s12"> 
        {console.log(days)}                  
        {<CalendarGrid days={days} firstDay={firstDay} title={titleWeekend} >
          {<h2>{toWeekend}</h2>}                
        </CalendarGrid>
        /*calendar ? <Calendario cal={calendar} /> : <p>Cargando…</p>*/}
      </div>

        
    </>);
};


