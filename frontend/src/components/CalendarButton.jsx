export default function CalendarButton(dex) {    
   if (dex.date === "wait") {
    return null; // no renderiza nada si está en espera
  }
    console.log(dex.day)
    const bdate = dex.date;    
    const bday = dex.day;
    function activeButton(){ 



    
  }
  
    
    
return (
    <button  id = "calendarButton">
      {dex.day ? (
        <div>
          <p><strong>Desayuno:</strong> {dex.day.desayuno || "—"}</p>
          <p><strong>Comida:</strong> {dex.comida || "—"}</p>
          <p><strong>Mediodía:</strong> {dex.day.mediodia || "—"}</p>
          <p><strong>Tarde:</strong> {dex.day.tarde || "—"}</p>
          <p><strong>Noche:</strong> {dex.day.noche || "—"}</p>
          <p><strong>Cena:</strong> {dex.day.cena || "—"}</p>
          <p><strong>{dex.date}</strong> </p>
        </div>
      ) : (
        <p>{dex.date}</p> // si no hay `day`, muestra solo la fecha
      )}
    </button>
  );
}