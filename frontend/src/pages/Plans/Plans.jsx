import React from "react";
import { Link } from "react-router-dom";
import { getPlans} from "../../features/days/api";
import Card from "../../components/Card";


export default function AllPlans() {    
    const [plans, setPlans] = React.useState([]);
    
    function NuevoPlanButton(){
        
    }
    function deletePlanButton(){

    }

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
            <button id="savebutton" >Nuevo plan</button>
            <div className="col-12"><Card title="Tus planes"> 
            <ul> 
                {plans.map(pl=> <li key={pl.id} id="plan-li">
                        <span> {pl.nombre} </span>  <button id="minibutton" >❌</button>
                    </li>
                
                )}             
                    
            </ul>
            </Card></div> 
        </div>            
    </>
    )
}

  
