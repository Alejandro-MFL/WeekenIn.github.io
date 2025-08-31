import { http } from "../../lib/http";


export const getSummary = () => http("weekend/api/summary");
export const getPlans   = (limit=10) => http(`weekend/api/plans/?limit=${limit}`);
export const getMonth   = (year, month) => http(`weekend/api/calendar/month/?year=${year}&month=${month}`);