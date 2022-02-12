import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import useStyles from "./formStyles";
import LayoutContainer from "../layout/LayoutContainer";

const validationSchema = yup.object({
  creditCardNumber: yup.number().required("Credit Card Number is required"),
  cvc: yup.number().required("CVC is required"),
  expiry: yup.date().required("expiry date is required"),
});

const RegisterForm = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      creditCardNumber: "",
      cvc: "",
      expiry: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Submitting values -->", values);
    },
  });

  return (
    <LayoutContainer>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.root}>
          <TextField
            fullWidth
            id="credit-card-number"
            name="creditCardNumber"
            label="Credit card number"
            variant="outlined"
            value={formik.values.creditCardNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.creditCardNumber &&
              Boolean(formik.errors.creditCardNumber)
            }
            helperText={
              formik.touched.creditCardNumber && formik.errors.creditCardNumber
            }
          />
          <div className={classes.cvcExpiryContainer}>
            <TextField
              id="cvc"
              name="cvc"
              label="CVC"
              variant="outlined"
              value={formik.values.cvc}
              onChange={formik.handleChange}
              error={formik.touched.cvc && Boolean(formik.errors.cvc)}
              helperText={formik.touched.cvc && formik.errors.cvc}
            />
            <TextField
              id="expiry"
              name="expiry"
              label="Expiry"
              variant="outlined"
              value={formik.values.expiry}
              onChange={formik.handleChange}
              error={formik.touched.expiry && Boolean(formik.errors.expiry)}
              helperText={formik.touched.expiry && formik.errors.expiry}
            />
          </div>
          <Button color="primary" variant="contained" fullWidth type="submit" aria-label="submit">
            Submit
          </Button>
        </div>
      </form>
    </LayoutContainer>
  );
};

export default RegisterForm;
