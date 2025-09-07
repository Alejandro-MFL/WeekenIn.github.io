import { http } from "../../lib/http";

//export const deletePlans = () => http("weekend/api/plans/delete/:id/");
//export const updatePlans = () => http("weekend/api/plans/update/");
export const getPlans   = () => http(`weekend/api/plans/`);


export const selectDay = () => http(`weekend/api/day/:id/`);


export const deletePlans = (id) =>
  http("weekend/api/plan/delete", {
    method: "POST",
    body: JSON.stringify({ id}),
  });
export const updatePlans = (nombre, precio,zona,provincia) => 
    http("weekend/api/plan/update", {
    method: "POST",
    body: JSON.stringify({nombre, precio,zona,provincia}),
  });
