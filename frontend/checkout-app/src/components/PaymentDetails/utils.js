export const validateCvc = (cvc) => {
  return String(cvc)
    .toLowerCase()
    .match(/^\d{3}$/);
};
