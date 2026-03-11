import { create } from "zustand";
import { contactService } from "../services/contactService";

interface ContactState {
  contacts: any[];
  loading: boolean;
  addContact: (data: any) => Promise<void>;
  fetchContacts: () => Promise<void>;
}

export const useContactStore = create<ContactState>((set) => ({
  contacts: [],
  loading: false,

  addContact: async (data) => {
    set({ loading: true });
    await contactService.create(data);
    set({ loading: false });
  },

  fetchContacts: async () => {
    set({ loading: true });
    const contacts = await contactService.getAll();
    set({ contacts, loading: false });
  },
}));