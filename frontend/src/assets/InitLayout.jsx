import { Outlet, useNavigate} from "react-router-dom";


export default function InitLayout() {
    const navigate = useNavigate();

    function Login() {
        navigate("/login", { replace: true });
    }

    

  return (
    <section class="container">
        <header>
            <p></p>       
            <h1>WeekendIn</h1>
            <button id = "headerButton" onClick={Login}>Login</button>

        </header>         

        <main>
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