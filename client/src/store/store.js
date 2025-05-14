import { create } from "zustand";

const store = create((set) => ({
  token: null,
  isLoggedIn: false,

  login: (token) => set({ token, isLoggedIn: !!token }),
  logout: () => set({ token: null, isLoggedIn: false }),
}));

export default store;
