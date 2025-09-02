import { http } from "../../lib/http";



export const getPlans   = (limit=10) => http(`weekend/api/plans/?limit=${limit}`);
export const getDays   = () => http(`weekend/api/calendar/month`);