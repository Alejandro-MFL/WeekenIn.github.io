import { http } from "../../lib/http";

export const selectPlans = () => http("weekend/api/plans/");

export const selectDay = () => http(`weekend/api/day/:id/`);
export const getPlans   = () => http(`weekend/api/plans/`);