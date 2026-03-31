import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function searchFood(item) {
  try {
    const { data } = await axios.get(`${API_BASE}/search`, { params: { item } });

    // if no data from backend
    if (!data || data.length === 0) {
      return [];
    }

    return data;
  } catch (error) {
    console.log("API Error:", error);
    return [];
  }
}
