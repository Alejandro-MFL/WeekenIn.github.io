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
    <div>
        <header className="site-header">
            <nav className="nav">          
            <div className="spacer" /> 
            <button onClick={goHome}>Home</button>
            <div className="spacer" />
            <p id="fo">WeekendIn</p>
            <div className="spacer" />
            <button onClick={Logout}>Logout</button>
            <div className="spacer" />           
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