import { createContext, useContext } from "react";
import useCategories from "../hooks/useCategories";

export const CategoriesContext = createContext();

export default function CategoriesProvider({ children }) {
  const categories = useCategories();
  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategoriesContext() {
    const context = useContext(CategoriesContext);
    if (context === undefined) {
      throw new Error(
        "useCategoriesContext must be used within a CategoriesProvider"
      );
    }
    return context;
  }
