import { Outlet, useNavigate} from "react-router-dom";


export default function InitLayout() {
    const navigate = useNavigate();

    function Login() {
        navigate("/login", { replace: true });
    }

    

  return (
    <section class="container">
        <header>
            <nav>  
            <div  />         
            <h1>WeekendIn</h1>
            <div  />
            <button onClick={Login}>Login</button>
           
            </nav>
        
            
        </header>

        <main style={{ padding: "1rem" }}>
            <section>
                <Outlet name="main"/>
            </section>
            
        </main>

        <footer>
            
            <h3>"Web desarrollada por Alejandro M Fernández"</h3>
            <h4>Web en desarrollo</h4>
           
        </footer>
    </section>
  );
}