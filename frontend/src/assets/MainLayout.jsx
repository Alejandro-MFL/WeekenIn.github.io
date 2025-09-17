import { Outlet, useNavigate} from "react-router-dom";


export default function MainLayout() {
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
            <section>
                <Outlet name="main"/>
            </section>
        </main>

        <footer>
            
        </footer>
    </section>
  );
}