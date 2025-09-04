import { http } from "../../lib/http";

export const selectPlans = () => http("weekend/api/plans/");

export const selectDay = () => http(`weekend/api/day/:id/`);