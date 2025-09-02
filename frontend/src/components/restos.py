homeAntiguo = """ 
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
    
    
    

    React.useEffect(() => {
        
        let today = new Date();                
        setFirstDay(today - today.getDay()); 
        let toWeek = 6 - today.getDay();  
        console.log(today);       
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

            console.log(d);
            console.log(p);

            setPlans(p.results || p);   // por si usas paginación luego
            setDays(d);
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
             {<div className="col-4"><CalendarGrid days={days} firstDay={firstDay} title={titleWeekend} >
                {<h2>{toWeekend}</h2>}
              </CalendarGrid></div>
             /*calendar ? <Calendario cal={calendar} /> : <p>Cargando…</p>*/}
            </Card></div>

        </div>
    </>);
};




























"""
CalendarGrip = """ 
import CalendarButton from "./CalendarButton";


export default function CalendarGrid(days, firstDay) {
  const weeks = 4;
  const daysPerWeek = 7;
  
  const addDays = (n) => {
    let newDate = firstDay + n; 
    return newDate;   
  } 
  const searchDay = (date) => {
    for (let i = 0; i < days.length; i++ ){
      if (date === days[i].date) {
        let theDay = days[i];
        days.splice(i,1);
        return theDay}
      else if (date > days[i]) {return undefined;}
    }      
  }
  const dateInLocate = (date) => {
    console.log(firstDay)
    if(firstDay != undefined){
      const [año, mes, dia] = date.split("-");    
      const [añof, mesf, diaf] = firstDay.split("-");
    
    
      if (mes === mesf) {return dia;}
      else {return `${dia}-${mes}`;}
    }
    return "wait"
  }



  return (
      //  En el grid, con x columnas de yfr de ancho y con una separacion de fila-columna de gap: z
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8 }}>
        {/*genera un array vacio de tamaño length, map recorre cada celda respecto al indice i*/}
        {Array.from({ length: weeks * daysPerWeek }).map((_, i) => {
          const date = addDays(i);
          const dayObj = searchDay(date); 
          const spainDate = dateInLocate (date);
          const key = date + i;

          // si la fecha esta en la base se lo adjudica, si no undefined             
  
          return (
            // Renderiza cada boton, con una clave, una fecha y el day si esta
            <CalendarButton              
              date={spainDate}
              day={dayObj}      // si existe, lo pasas; si no, va undefined
              key={key}
            />
          );
        })}
      </div>
    );
  }
  

"""
calendarGripSimple = """ 
import CalendarButton from "./CalendarButton";

export default function CalendarGrid() {
  const weeks = 4;
  const daysPerWeek = 7;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8 }}>
      {Array.from({ length: weeks * daysPerWeek }).map((_, i) => {
        const week = Math.floor(i / daysPerWeek) + 1;
        const day = (i % daysPerWeek) + 1;

        return (
          <button
            key={i}
            style={{
              padding: "20px",
              background: "#f0f0f0",
              border: "1px solid #ccc",
              borderRadius: 4,
              cursor: "pointer",
            }}
            onClick={() => alert(`Semana ${week}, Día ${day}`)}
          >
            {`W${week}D${day}`}
          </button>
        );
      })}
    </div>
  );
}
"""


