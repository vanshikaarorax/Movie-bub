import { create } from "zustand";

export const useContentStore=create((set)=>({
    contentType: "movie",//this is when no page is clicked nor movies nor tv
    setContentType: (type) => set({ contentType: type }),
}))