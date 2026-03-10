import { createContact, getContacts } from "../api/contactApi";

export const contactService = {
  create: async (data: any) => {
    const response = await createContact(data);
    return response.data;
  },

  getAll: async () => {
    const response = await getContacts();
    return response.data;
  },
};