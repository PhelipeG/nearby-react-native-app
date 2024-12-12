import { api } from "./api";

export const fetchMarkets = async (category: any) => {
  try {
    if (!category) {
      return;
    }
    const { data } = await api.get("/markets/category/" + category);
    console.log("Markets fetched:", data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
