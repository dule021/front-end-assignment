import axios from "axios";

const apiConstants = {
  CART_DATA_PATH: "/checkoutDetails",
  CHECKOUT_PATH: "/order",
};

export const getCartData = async () => {
  return axios.get(`${apiConstants.CART_DATA_PATH}`);
};

export const postCheckoutData = async (checkoutData) => {
  return axios.post(`${apiConstants.CHECKOUT_PATH}`, {
    ...checkoutData,
  });
};
