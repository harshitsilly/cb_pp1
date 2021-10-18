import React, { useState } from "react";
import Screen from "../components/Screen";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { inRange } from "../utils/validators";

// TODO Q4
const TwoFactorAuthScreen = () => {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [code, setCode] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Screen>
      <form>
        <Title>Enter verification code</Title>
        <Subtitle>
          A text message with a 7-digit code has been sent to your mobile phone
          number
        </Subtitle>
        <TextInput
          role="textbox"
          value={code}
          label="Code"
          onChange={(e) => {
            const textBoxCode = Number(e.target.value);
            if (isNaN(textBoxCode)) {
              return;
            }
            if (e.target.value.length === 7) {
              setIsSubmitDisabled(false);
            } else {
              setIsSubmitDisabled(true);
            }

            setCode(textBoxCode);
          }}
          placeholder="Enter the 7-digit code"
        />
        <Button
          type="primary"
          onClick={onSubmit}
          value="Submit"
          disabled={isSubmitDisabled}
        />
      </form>
    </Screen>
  );
};

export default TwoFactorAuthScreen;
