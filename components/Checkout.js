import useStyles from "@/utils/styles";
import { Step, StepLabel, Stepper } from "@material-ui/core";
import React from "react";
function CheckoutMenu({ activeStep = 0 }) {
  const classes = useStyles();
  return (
    <Stepper className={classes.transparentBg} activeStep={activeStep} alternativeLabel>
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
