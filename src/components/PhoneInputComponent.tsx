import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import default styles
import "./PhoneInput.css"; // Import custom styles

export const PhoneInputComponent = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="phone-input-wrapper">
      <label className="phone-label" htmlFor="phoneInput">
        Primary Cell Phone Number
      </label>

      <PhoneInput
        country={"pk"} // Set default country to Pakistan
        value={phone}
        onChange={(phone) => setPhone(phone)}
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: true,
          placeholder: "",
        }}
        containerStyle={{
          width: "auto", // Set the width of the entire container (including country code)
          marginTop: "28px",
        }}
        inputStyle={{
          width: "89%", // Adjust the input field width (excluding country code)
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "transparent",
          marginLeft: "40px",
        }}
      />
      <small className="phone-helper-text">
        Please enter cell number in the correct format
      </small>
    </div>
  );
};

export default PhoneInputComponent;
