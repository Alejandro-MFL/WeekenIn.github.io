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
          <p id = "DayText"><strong>Desayuno:</strong> {dex.day.desayuno || "—"}</p>
          <p id = "DayText"><strong>Comida:</strong> {dex.comida || "—"}</p>
          <p id = "DayText"><strong>Mediodía:</strong> {dex.day.mediodia || "—"}</p>
          <p id = "DayText"><strong>Tarde:</strong> {dex.day.tarde || "—"}</p>
          <p id = "DayText"><strong>Noche:</strong> {dex.day.noche || "—"}</p>
          <p id = "DayText"><strong>Cena:</strong> {dex.day.cena || "—"}</p>
          <p id = "DayText"><strong>{dex.date}</strong> </p>
        </div>
      ) : (
        <p>{dex.date}</p> // si no hay `day`, muestra solo la fecha
      )}
    </button>
  );
}