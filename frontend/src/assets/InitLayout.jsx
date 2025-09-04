import { Outlet, useNavigate} from "react-router-dom";


export default function InitLayout() {
    const navigate = useNavigate();

    function Login() {
        navigate("/login", { replace: true });
    }

    

  return (
    <div>
        <header className="site-header">
            <nav className="nav">  
            <div className="spacer" />         
            <h1>WeekendIn</h1>
            <div className="spacer" />
            <button id = "headerButton" onClick={Login}>Login</button>
           
            </nav>
        
            
        </header>

        <main style={{ padding: "1rem" }}>
            
            <Outlet name="main"/>
        </main>

        <footer>
            
        </footer>
    </div>
  );
}