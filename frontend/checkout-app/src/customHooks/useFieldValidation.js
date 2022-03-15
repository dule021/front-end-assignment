import React, { useState } from "react";

export const useFieldValidation = () => {
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    country: false,
    postalCode: false,
    phone: false,
    creditCard: false,
    CVV: false,
    expDate: false,
  });

  const changeErrorStatus = (fieldName, isError) => {
    setErrors((currentErrors) => {
      return {
        ...currentErrors,
        [`${fieldName}`]: isError,
      };
    });
  };

  const validateField = (fieldName, fieldValue, validatorFn) => {
    const isValid = validatorFn(fieldValue);
    changeErrorStatus(fieldName, !isValid);
  };

  const doBackendValidation = (backendErrors) => {
    const currentErrors = { ...errors };

    for (const field in currentErrors) {
      currentErrors[field] = backendErrors.includes(field)
        ? true
        : currentErrors[field];
    }

    setErrors(currentErrors);
  };

  return { errors, validateField, doBackendValidation };
};
