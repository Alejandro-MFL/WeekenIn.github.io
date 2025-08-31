import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
        <header className="site-header">
            <nav className="nav">
            <Link to="/">WeekendIn</Link>
            <div className="spacer" />
            <Link to="/login">Login</Link>
           
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