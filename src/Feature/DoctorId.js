import jwt_decode from "jwt-decode";

let decodedData = jwt_decode(window.localStorage.getItem('doctor-token'));
export const doctorid = decodedData._id;


