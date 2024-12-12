import { api } from "./api";

export const fetchCategories = async () => {
  try {
    const { data } = await api.get("/categories");
    console.log("Categories fetched:", data);
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
