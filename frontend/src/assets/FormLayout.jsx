import { Outlet, useNavigate} from "react-router-dom";


export default function FormLayout() {
    const navigate = useNavigate();

    function goHome() {
        navigate("/Home", { replace: true });
    }

    function Logout() {
        sessionStorage.removeItem("access");
        sessionStorage.removeItem("refresh");
        navigate("/", { replace: true });
    }

    

  return (
    <section className="container">
       <header> 
            
            <button id = "headerButton" onClick={goHome}>Home</button>            
            <h1>WeekendIn</h1>           
            <button id = "headerButton" onClick={Logout}>Logout</button> 
                                  
        </header>        

        <main>
            
                <Outlet name="main"/>
                        
        </main>

        <footer>            
            <h3>"Web desarrollada por Alejandro M Fernández"</h3>
            <h4>Web en desarrollo</h4>           
        </footer>
    </section>
  );
}