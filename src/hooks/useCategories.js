import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { capitalizeWords } from "../funcs/capitalizeWords";
import { toCamelCase } from "../funcs/toCamelCase";

export default function useCategories() {
  const { data, isPending, error } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (data) {
      const allCategories = {
        title: "All Products",
        path: "/allproducts",
        name: "allproducts",
      };
      const newCategories = data.map((category) => {
        const path = "/" + toCamelCase(category);
        const title = capitalizeWords(category);
        return {
          title,
          path,
          name: category,
        };
      });
      setCategories([allCategories, ...newCategories]);
    }
  }, [data]);

  return { categories, isPending, error };
}
