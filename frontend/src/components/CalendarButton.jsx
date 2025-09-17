 import React from "react";
 
 
 function CalendarButton(dex) {    
   if (dex.date === "wait") {
    return null; // no renderiza nada si está en espera
  }
    const today = dex.tday;
    const bdate = dex.date;    
    const bday = dex.day;
    function activeButton(){}
    

    
return (
    <button  className = "calendarButton" >
      {dex.day ? (
        <div>
          {dex.day.desayuno ? ( <span id = "DayText"> {dex.day.desayuno || "—"}</span>) 
          : ("") 
          }          
          {dex.day.mediodia ? ( <span id = "DayText"> {dex.day.mediodia || "—"}</span>) 
          : ("") 
          }
          {dex.day.comida ? ( <span id = "DayText"> {dex.day.comida || "—"}</span>) 
          : ("") 
          }
          {dex.day.tarde ? ( <span id = "DayText"> {dex.day.tarde || "—"}</span>) 
          : ("") 
          }
          {dex.day.noche ? (<span id = "DayText"> {dex.day.noche || "—"}</span>) 
          : ("") 
          }
          {dex.day.cena  ? (<span id = "DayText"> {dex.day.cena || "—"}</span>) 
          : ("") 
          } 
          <span className={`numberDayText ${dex.tday ? 'isToday' : ''}`}
          ><strong>{dex.date}</strong> </span>
        </div>           
        
      ) : (
        <span className={`numberDayText ${dex.tday ? 'isToday' : ''}`}><strong>{dex.date}</strong></span> // si no hay `day`, muestra solo la fecha
      )}
    </button>
  );
}

export default React.memo(CalendarButton);