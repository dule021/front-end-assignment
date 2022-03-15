import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import CheckoutInputSection from "../CheckoutInputSection/CheckoutInputSection";
import { validateCvc } from "./utils";
import { validateRequired } from "../PersonalDetails/utils";

const PaymentDetails = ({ onChange, errors, validateField }) => {
  const [creditCard, setCreditCard] = useState("");
  const [CVV, setCVV] = useState("");
  const [expDate, setExpDate] = useState("");

  useEffect(() => {
    onChange({
      creditCard,
      CVV,
      expDate,
    });
  }, [creditCard, CVV, expDate]);

  return (
    <CheckoutInputSection sectionTitle="Payment Details" sectionNumber="2">
      <div className="checkout__input-container">
        <TextField
          id="credit-card"
          label="Credit Card Number"
          variant="filled"
          className="checkout__input checkout__input-credit-card"
          helperText={errors.creditCard && "Invalid Credit Card Format"}
          error={errors.creditCard}
          required
          value={creditCard}
          onChange={(e) => setCreditCard(e.target.value)}
          onBlur={() =>
            validateField("creditCard", creditCard, validateRequired)
          }
          placeholder="0000-0000-0000-0000"
        />
      </div>
      <div className="checkout__input-container">
        <TextField
          id="security-code"
          label="Security Code"
          variant="filled"
          className="checkout__input checkout__security-code"
          inputProps={{ maxLength: 3 }}
          type="password"
          helperText={errors.CVV && "Invalid CVV Number"}
          error={errors.CVV}
          required
          value={CVV}
          onChange={(e) => setCVV(e.target.value)}
          onBlur={() => validateField("CVV", CVV, validateCvc)}
          placeholder="***"
        />
        <TextField
          id="expiration-date"
          label="Expiration Date"
          variant="filled"
          className="checkout__input checkout__expiration-date"
          helperText={errors.expDate && "Invalid Expiration Date Format"}
          error={errors.expDate}
          required
          value={expDate}
          onChange={(e) => setExpDate(e.target.value)}
          onBlur={() => validateField("expDate", expDate, validateRequired)}
          placeholder="MM/YY"
        />
      </div>
    </CheckoutInputSection>
  );
};

export default PaymentDetails;
