import React from "react";

import { getPlans} from "../../features/days/api";
import Card from "../../components/Card";


export default function AllPlans() {    
    const [plans, setPlans] = React.useState([]);
    
    

    React.useEffect(() => {
          
        (async () => {
        try {
            const d = await getPlans();
            setPlans(d); 
            console.log(d);
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
        </div>            
    </>
    )
}

  
