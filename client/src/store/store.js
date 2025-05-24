import { create } from "zustand";

const store = create((set) => ({
  token: null,
  isLoggedIn: false,
  uId: null,

  login: (token, userId) => set({ token, uId: userId, isLoggedIn: !!token }),
  logout: () => set({ token: null, isLoggedIn: false }),
  signUp: (token, userId) => set({ token, uId: userId, isLoggedIn: !!token }),
}));

export default store;
