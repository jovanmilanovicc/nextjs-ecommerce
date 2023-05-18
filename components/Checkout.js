import useStyles from "@/utils/styles";
import { Step, StepLabel, Stepper } from "@material-ui/core";
import Link from "next/link";
import React from "react";
function CheckoutMenu({ activeStep = 0 }) {
  const classes = useStyles();
  return (
    <Stepper className={classes.transparentBg} activeStep={activeStep} alternativeLabel>
      {[{name: 'Login', url: '/login'}, {name: "Shipping Andress", url:"/shipping"}, {name: "Payment Method", url: '/payment'}, {name:"Place Order", url: '/placeorder'}].map(
        (step) => (
          <Step className={classes.cursorPointer} key={step.name} onClick={() => window.location.href = step.url}>
            <StepLabel>
            <Link href={step.url}>
                {step.name}
                </Link>
            </StepLabel>
          </Step>
        )
      )}
    </Stepper>
  );
}

export default CheckoutMenu;
