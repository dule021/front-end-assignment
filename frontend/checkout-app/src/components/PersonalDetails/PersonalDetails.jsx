import React, { useEffect, useState } from "react";
import {
  TextField,
  FormControl,
  FormHelperText,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import {
  validateEmail,
  validatePhone,
  validatePostal,
  validateRequired,
} from "./utils";

import CheckoutInputSection from "../CheckoutInputSection/CheckoutInputSection";

const PersonalDetails = ({ onChange, errors, validateField }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    onChange({
      firstName,
      lastName,
      email,
      country,
      postalCode,
      phone,
    });
  }, [firstName, lastName, email, country, postalCode, phone]);

  return (
    <CheckoutInputSection sectionTitle="Personal Details" sectionNumber="1">
      <div className="checkout__input-container">
        <TextField
          id="name"
          label="First Name"
          variant="filled"
          className="checkout__input checkout__input-name"
          helperText={errors.firstName && "Required"}
          error={errors.firstName}
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onBlur={() => validateField("firstName", firstName, validateRequired)}
        />
        <TextField
          id="lastName"
          label="Last Name"
          variant="filled"
          className="checkout__input checkout__input-lastName"
          helperText={errors.lastName && "Required"}
          error={errors.lastName}
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onBlur={() => validateField("lastName", lastName, validateRequired)}
        />
      </div>
      <div className="checkout__input-container">
        <TextField
          id="email"
          label="Email"
          variant="filled"
          type="email"
          className="checkout__input checkout__input-email"
          helperText={errors.email && "Must be a valid email"}
          error={errors.email}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => validateField("email", email, validateEmail)}
        />
      </div>
      <div className="checkout__input-container">
        <FormControl
          className="checkout__input checkout__input-country"
          variant="filled"
        >
          <InputLabel id="country-select-filled">Country</InputLabel>
          <Select
            id="country-select-filled"
            variant="filled"
            label="Country"
            labelId="country-select-filled"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            onBlur={() => validateField("country", country, validateRequired)}
            error={errors.country}
            required
          >
            <MenuItem value="Serbia">Serbia</MenuItem>
            <MenuItem value="Croatia">France</MenuItem>
            <MenuItem value="Croatia">Nicaragua</MenuItem>
            <MenuItem value="Croatia">Tanzania</MenuItem>
          </Select>
          <FormHelperText error={errors.country}>
            {errors.country && "Required"}
          </FormHelperText>
        </FormControl>
        <TextField
          id="postal"
          label="Postal Code"
          variant="filled"
          className="checkout__input checkout__input-postal"
          helperText={errors.postalCode && "Must contain 5 digits"}
          error={errors.postalCode}
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          onBlur={() => validateField("postalCode", postalCode, validatePostal)}
          required
        />
      </div>
      <div className="checkout__input-container">
        <TextField
          id="phone"
          label="Phone Number"
          variant="filled"
          className=" checkout__input checkout__input-phone"
          helperText={errors.phone && "Must be a nine digit number"}
          error={errors.phone}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={() => validateField("phone", phone, validatePhone)}
          required
        />
      </div>
    </CheckoutInputSection>
  );
};

export default PersonalDetails;
