import api from "./axios";

export const createContact = (data: any) => {
  return api.post("/post-enquiry-form/", data);
};

export const getContacts = () => {
  return api.get("/contact");
};