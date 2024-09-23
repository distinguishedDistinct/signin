import { useState } from "react";
import "./Cnic.css";

export const Cnic = () => {
  const [cnic, setCnic] = useState("");

  // Handle input change and allow only numbers and dashes
  const handleCnicChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    // Only allow digits and dashes, remove any other characters
    const formattedValue = value.replace(/[^0-9-]/g, "");
    setCnic(formattedValue);
  };

  return (
    <>
      <select name="cnic" className="cnic-select">
        <option value="CNIC">CNIC</option>
        <option value="POC">POC</option>
      </select>

      <input
        type="text"
        className="cnic-input"
        placeholder="12345-6789012-3"
        value={cnic}
        onChange={handleCnicChange}
        pattern="\d{5}-\d{7}-\d{1}"
        title="CNIC format: 12345-6789012-3"
        required
        maxLength={15} // CNIC format has 15 characters
      />
    </>
  );
};

export default Cnic;
