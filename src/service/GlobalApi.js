import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + "/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

console.log(import.meta.env.VITE_BASE_URL);

const CreateNewResume = (data) => axiosClient.post("/user-resumes", data);
const GetUserResume = (userEmail) => axiosClient.get("/user-resumes?filters[userEmail][$eq]=" + userEmail);
const UpdateResumeDetail = (id, data) => axiosClient.put("/user-resumes/" + id, data);
const GetResumeById = (id) => axiosClient.get("/user-resumes/" + id + "?populate=*");

export default {
  CreateNewResume,
  GetUserResume,
  UpdateResumeDetail,
  GetResumeById,
};
