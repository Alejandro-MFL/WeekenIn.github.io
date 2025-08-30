const BACK_LOCALHOST = import.meta.env.VITE_API;

// Funcion base para llamar al back  pidiendo dos argumentos, el camino y un objeto de la peticion
export async function http(path, options = {}) {
    const token = sessionStorage.getItem("access");
    console.log(token)
    // headers establece el contenido y suma los headers del argumento que se envie
    const headers = { "Content-Type": "application/json", ...(options.headers||{}) };

    if (token) headers.Authorization = `Bearer ${token}`;
    const respuesta = await fetch(`${BACK_LOCALHOST}${path}`, { ...options, headers });
    // Revisa la respuestapuesta si es 200-299, si no manda el error, 
    if (!respuesta.ok) throw new Error(await respuesta.text());
    return respuesta.headers.get("content-type")?.includes("application/json")
    ? respuesta.json()
    : respuesta.text();
}