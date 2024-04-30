import React, { useState } from "react";
import "./OtpInput.css";
import OtpInput from "react18-input-otp";

export default function ReactOtpInput({ otp, handleOtpChange, handleSubmit }) {
  // const [otp, setOtp] = useState("");

  return (
    <OtpInput
      id="myInput"
      // placeholder=""
      value={otp}
      onChange={handleOtpChange}
      numInputs={4}
      isSuccessed={false}
      errorStyle="error"
      successStyle="success"
      inputStyle="border size"
      containerStyle={"container"}
      isInputNum
      // separator={<span>-</span>}
      // separateAfter={3}
      shouldAutoFocus
      onSubmit={handleSubmit}
    />
  );
}``
