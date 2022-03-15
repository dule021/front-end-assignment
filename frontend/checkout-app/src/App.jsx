import React, { useEffect, useState } from "react";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import PaymentDetails from "./components/PaymentDetails/PaymentDetails";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import { getCartData, postCheckoutData } from "./api/checkoutApi";
import { useFieldValidation } from "./customHooks/useFieldValidation";
import { Alert, Snackbar } from "@mui/material";

import "./app.scss";

const App = () => {
  const [successMessage, setSuccessMessage] = useState();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(undefined);
  const [orderDetailsErrorMessage, setOrderDetailsErrorMessage] = useState();

  const [userData, setUserData] = useState();

  const { errors, validateField, doBackendValidation } = useFieldValidation();

  useEffect(() => {
    getCartData()
      .then((response) => setOrderDetails(response.data))
      .catch((error) => setOrderDetailsErrorMessage(error.message));
  }, []);

  const onSubmit = async (checkoutData) => {
    try {
      const response = await postCheckoutData(checkoutData);
      setSuccessMessage(response.data.message);
      setIsNotificationOpen(true);
    } catch (error) {
      const validationErrors = error.response.data.errors.map(
        (error) => error.field
      );
      doBackendValidation(validationErrors);
    }
  };

  const onFormDetailsChange = (formDetails) => {
    setUserData((currentUserData) => {
      return {
        ...currentUserData,
        ...formDetails,
      };
    });
  };

  return (
    <div className="checkout">
      <div className="checkout__inputs">
        <PersonalDetails
          onChange={onFormDetailsChange}
          errors={errors}
          validateField={validateField}
        />
        <PaymentDetails
          onChange={onFormDetailsChange}
          errors={errors}
          validateField={validateField}
        />
        <button
          className="checkout__submit-button"
          type="button"
          onClick={() => onSubmit(userData)}
        >
          Complete Purchase
        </button>
      </div>
      <div className="checkout__info">
        <OrderDetails orderItems={orderDetails && orderDetails?.cart?.items} />
      </div>
      <Snackbar
        open={isNotificationOpen}
        autoHideDuration={3000}
        onClose={() => setIsNotificationOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setIsNotificationOpen(false)}
          severity={orderDetailsErrorMessage ? "error " : "success"}
          sx={{
            width: "100%",
          }}
        >
          {orderDetailsErrorMessage || successMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default App;
