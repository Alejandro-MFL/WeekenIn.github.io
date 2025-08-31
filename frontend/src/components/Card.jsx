export default function Card({ title, subtitle, children, right }) {
  return (
    <div className="card">
      {title && <h3>{title}</h3>}
      {subtitle && <div className="muted" style={{marginBottom:12}}>{subtitle}</div>}
      {children}
      {right}
    </div>
  );
}