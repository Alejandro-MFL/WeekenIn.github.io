export default function CalendarButton(dex) {    
   if (dex.date === "wait") {
    return null; // no renderiza nada si está en espera
  }
    
    const bdate = dex.date;    
    const bday = dex.day;
    function activeButton(){ 



    
  }
  
    
    
return (
    <button  id = "calendarButton">
      {dex.day ? (
        <div>
          {dex.day.desayuno ? ( <p id = "DayText"><strong>Desayuno:</strong> {dex.day.desayuno || "—"}</p>) 
          : ("") 
          }
          
          {dex.day.mediodia ? ( <p id = "DayText"><strong>Mediodía:</strong> {dex.day.mediodia || "—"}</p>) 
          : ("") 
          }
          {dex.day.comida ? ( <p id = "DayText"><strong>Comida:</strong> {dex.day.comida || "—"}</p>) 
          : ("") 
          }
          {dex.day.tarde ? ( <p id = "DayText"><strong>Tarde:</strong> {dex.day.tarde || "—"}</p>) 
          : ("") 
          }
          {dex.day.noche ? (<p id = "DayText"><strong>Noche:</strong> {dex.day.noche || "—"}</p>) 
          : ("") 
          }
          {dex.day.cena  ? (<p id = "DayText"><strong>Cena:</strong> {dex.day.cena || "—"}</p>) 
          : ("") 
          } 
          <p id = "DayText"><strong>{dex.date}</strong> </p>
        </div>
      ) : (
        <p>{dex.date}</p> // si no hay `day`, muestra solo la fecha
      )}
    </button>
  );
}