/*import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { login, me } from "../../features/auth/api";
import Card from "../../components/Card";
import { getPlans, getDays } from "../../features/home/api";

export default function AllPlans() {
  const [plans, setPlans] = React.useState("");
  const [password, setP] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

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
            const d = await Promise.all([            
            getPlans()            
            ]);
            setPlans(p.results || p); 
        } catch (e) {
            console.error(e);
        }
        })();
    }, []);
  

  
    return (
      <>          
          <div className="grid">
              
            <div className="col-8"><Card title="Tus planes">
            <ul>            
                {plans.map(pl=> <li key={pl.id}>{pl.nombre}</li>)}      
            </ul>
            </Card></div>            
      </>
    )
  }
  */
  
