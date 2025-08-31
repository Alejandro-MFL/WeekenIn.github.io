const BACK_LOCALHOST = import.meta.env.VITE_API;

async function refreshToken() {
  const refresh = sessionStorage.getItem("refresh");
  if (!refresh) return null;
  const respuesta = await fetch(`${BACK_LOCALHOST}weekend/api/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh }),
  });
  if (!respuesta.ok) return null;
  const data = await respuesta.json();
  sessionStorage.setItem("access", data.access);
  return data.access;
}


// Funcion base para llamar al back  pidiendo dos argumentos, el camino y un objeto de la peticion
export async function http(path, options = {}) {
    const token = sessionStorage.getItem("access");    
    // headers establece el contenido y suma los headers del argumento que se envie
    let headers = { "Content-Type": "application/json", ...(options.headers||{}) };

    if (token) headers.Authorization = `Bearer ${token}`;
    let respuesta = await fetch(`${BACK_LOCALHOST}${path}`, { ...options, headers });
    // Revisa la respuestapuesta si es 200-299, si no manda el error y
      // si el token esta caducado lo renueva 
    if (respuesta.status === 401){
        const newToken = await refreshToken();
        if (newToken) {
            headers.Authorization = `Bearer ${token}`;
            respuesta = await fetch(`${BACK_LOCALHOST}${path}`, { ...options, headers });
        }
    }
    if (!respuesta.ok) throw new Error(await respuesta.text());
    return respuesta.headers.get("content-type")?.includes("application/json")
    ? respuesta.json()
    : respuesta.text();
}