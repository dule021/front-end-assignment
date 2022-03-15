export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePostal = (postalCode) => {
  return String(postalCode)
    .toLowerCase()
    .match(/^\d{5}$/);
};

export const validatePhone = (phone) => {
  return String(phone)
    .toLowerCase()
    .match(/^\d{9}$/);
};

export const validateRequired = (value) => Boolean(value);
