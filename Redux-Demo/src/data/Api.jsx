import axios from "axios";

export const getAllProducts = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
    // const res = await axios.get("https://api.escuelajs.co/api/v1/products");

  return res.data;
};

