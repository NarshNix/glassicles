import { create } from "zustand";

const store = create((set) => ({
  token: null,
  isLoggedIn: false,
  uId: null,

  login: (token, userId) => {
    localStorage.setItem("token", token);
    localStorage.setItem("uId", userId);
    set({ token, uId: userId, isLoggedIn: !!token });
  },

  signUp: (token, userId) => {
    localStorage.setItem("token", token);
    localStorage.setItem("uId", userId);
    set({ token, uId: userId, isLoggedIn: !!token });
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("uId");
    set({ token: null, uId: null, isLoggedIn: false });
  },
}));

export default store;
