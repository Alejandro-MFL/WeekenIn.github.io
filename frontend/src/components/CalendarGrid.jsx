import CalendarButton from "./CalendarButton";


export default function CalendarGrid(days, firstDay) {
  const weeks = 4;
  const daysPerWeek = 7;  

  const addDays = (n) => {    
    if(days.firstDay != "Cargando…"){
      let newDate = new Date(days.firstDay);
      newDate.setDate(newDate.getDate()+ n);    
      return newDate.toISOString().slice(0, 10);  
    }
    
  } 
  // Funcion que busca si una fecha tiene un dia guardado por el usuario
  const searchDay = (date) => {
    for (let i = 0; i < days.days.length; i++ ){      
      if (date === days.days[i].date) {
        let theDay = days.days[i];
        
        return theDay}      
    }      
  }
  const dateInLocate = (date) => {    
    
    if(days.firstDay != "Cargando…" ){
      const [año, mes, dia] = date.split("-");    
      const [añof, mesf, diaf] = days.firstDay.split("-");
    
    
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
          const key = i;

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
  