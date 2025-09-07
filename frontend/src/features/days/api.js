import { http } from "../../lib/http";

//export const deletePlans = () => http("weekend/api/plans/delete/:id/");
export const updatePlans = () => http("weekend/api/plans/update/:id/");
export const getPlans   = () => http(`weekend/api/plans/`);


export const selectDay = () => http(`weekend/api/day/:id/`);


export const deletePlans = (id) =>
  http("weekend/api/plan/delete", {
    method: "POST",
    body: JSON.stringify({ id}),
  });
