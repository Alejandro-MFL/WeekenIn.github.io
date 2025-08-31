import React from "react";
import Card from "../../components/Card";

export default function Home(){
  return (
    <>
      

      <div className="grid">
        <div className="col-4"><Card title="¿Días para Weekend?">
          <ul>
            <li>Bloque B</li>
            <li>Con columnas</li>
          </ul>
        </Card></div>

        <div className="col-8"><Card title="Meetzed" subtitle="Graphic Designer · 2020 — 2021">
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