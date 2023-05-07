import { Step, StepLabel, Stepper } from "@material-ui/core";
import React from "react";
function CheckoutMenu({ activeStep = 0 }) {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {["Login", "Shipping Andress", "Payment Method", "Place Order"].map(
        (step) => (
          <Step key={step}>
            <StepLabel>
                {step}
            </StepLabel>
          </Step>
        )
      )}
    </Stepper>
  );
}

export default CheckoutMenu;
