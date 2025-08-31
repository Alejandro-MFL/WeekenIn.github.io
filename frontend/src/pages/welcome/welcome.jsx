import React from "react";
import Card from "../../components/Card";

export default function Home(){
  return (
    <>
      <div style={{display:"flex",gap:16,alignItems:"flex-start",marginBottom:16}}>
        <img src="/avatar.png" alt="avatar" width="120" height="120" style={{borderRadius:24, boxShadow:"var(--shadow)"}}/>
        <Card>
          <p style={{fontSize:18, lineHeight:1.4}}>
            Bloque A
          </p>
        </Card>
      </div>

      <div className="grid">
        <div className="col-6"><Card title="Freelancer" subtitle="Logo/Brand Designer · 2021 — ahora">
          <ul>
            <li>Bloque B</li>
            <li>Con columnas</li>
          </ul>
        </Card></div>

        <div className="col-6"><Card title="Meetzed" subtitle="Graphic Designer · 2020 — 2021">
          <ul>
            <li>bloque C</li>
            <li>con columnas</li>
          </ul>
        </Card></div>

        <div className="col-6"><Card title="Design Tools">
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            <span className="card" style={{padding:"6px 10px"}}>Bd</span>
            <span className="card" style={{padding:"6px 10px"}}>Be</span>
            <span className="card" style={{padding:"6px 10px"}}>Bf</span>
          </div>
        </Card></div>

        <div className="col-6"><Card title="Education">
          <div className="muted">Bloque g</div>
          <div className="muted">blablabla</div>
          <div className="muted">blablabla2</div>
        </Card></div>

        <div className="col-12"><Card title="Portfolio">
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            {["Bento","Behance","Instagram","YouTube","Dribbble"].map(x=>(
              <span key={x} className="card" style={{padding:"8px 12px"}}>{x}</span>
            ))}
          </div>
        </Card></div>
      </div>
    </>
  );
}