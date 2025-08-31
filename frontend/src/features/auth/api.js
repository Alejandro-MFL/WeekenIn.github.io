import { http } from "../../lib/http";
import { useNavigate} from "react-router-dom";




export const register = (username, password) =>
  http("/weekend/api/auth/register", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });

export const login = (username, password) =>
  http("/weekend/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });

export const me = () => http("weekend/api/me");

