import React, { useState } from "react";
// import { Button } from '../../components'
import { Button, Logo, OtpInput } from "@/components";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { FOUR, PASSCODE } from "@/constants";
import { useLocalStorage } from "@/utils/hooks";

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #1e0f0f;
  margin: 0;
  font-family: "Rampart One", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

const Wrapper = styled.section`
  width: 96vw;
  margin: 0 auto;
  max-width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 25px;
  padding: 23px;
  background: white;
`;

const OtpInputWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
`;

const Signin = () => {
  const [otpInput, setOtpInput] = useState("");
  const [, setHasLogin] = useLocalStorage("hasLogin", "UTMx");
  const handleChange = (enteredOtp) => {
    setOtpInput(enteredOtp);
  };
  const isLoginConditionSatisfied = Number(otpInput) === Number(PASSCODE);
  const enableContinueButton = otpInput.length === FOUR;
  let navigate = useNavigate();

  const handleContinueButton = () => {
    if (isLoginConditionSatisfied) {
      setHasLogin(true);
      navigate("/dashboard");
    }
  };
  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#F0F0F0",
      }}
    >
      <Wrapper>
        {/* <Title>iSUTMx</Title>
         */}

        <div
          style={{
            textAlign: "center",
          }}
        >
          <Logo />
        </div>

        <OtpInputWrapper>
          <p style={{ margin: 0, fontWeight: 500, color: "#1E0F0F" }}>
            Enter passcode
          </p>
          <OtpInput
            handleOtpChange={handleChange}
            otp={otpInput}
            handleSubmit={handleContinueButton}
          />
        </OtpInputWrapper>

        <Button onClick={handleContinueButton} disabled={!enableContinueButton}>
          Continue
        </Button>
      </Wrapper>
    </section>
  );
};

export default Signin;
