import Layout from "@/components/Layout";
import {
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import useStyles from "@/utils/styles";
import { Store } from "@/utils/store";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { Controller, useForm } from "react-hook-form";
import CheckoutMenu from "@/components/Checkout";

function Shipping() {
  const { state } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAdress },
  } = state;
  const { location } = shippingAdress;
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();
  useEffect(() => {
    if (!userInfo) {
      router.push("/login?redirect=/shipping");
    }
    setValue('fullName', shippingAdress.fullName);
    setValue('adress', shippingAdress.adress);
    setValue('city', shippingAdress.city);
    setValue('postal', shippingAdress.postal);
    setValue('country', shippingAdress.country);
  });

  const classes = useStyles();
  const router = useRouter();
  const { dispatch } = useContext(Store);

  const onSubmitHandler = ({ fullName, adress, city, postal, country }) => {
    dispatch({
      type: "SAVE_SHIPPINING_ADRESS",
      payload: { fullName, adress, city, postal, country, location },
    });
    Cookies.set(
      "shippingAdress",
      JSON.stringify({ fullName, adress, city, postal, country, location })
    );
    router.push("/payment");
  };

  const chooseLocationHandler = () => {
    const fullName = getValues('fullName');
    const address = getValues('address');
    const city = getValues('city');
    const postalCode = getValues('postalCode');
    const country = getValues('country');
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullName, address, city, postalCode, country },
    });
    Cookies.set('shippingAddress', {
      fullName,
      address,
      city,
      postalCode,
      country,
      location,
    });
    router.push('/map');
  };

  return (
    <Layout title="Shipping">
      <CheckoutMenu activeStep={1}/>
      <form className={classes.form} onSubmit={handleSubmit(onSubmitHandler)}>
        <Typography variant="h1" component="h1">
          Shipping Adress
        </Typography>
        <List>
          <ListItem>
            <Controller
              name="fullName"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  color="secondary"
                  variant="outlined"
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  error={Boolean(errors.fullName)}
                  helperText={
                    errors.fullName
                      ? errors.fullName.type === "minLength"
                        ? "Full Name lenght needs to be more than 1"
                        : "Full Name is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="adress"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 5,
              }}
              render={({ field }) => (
                <TextField
                  color="secondary"
                  variant="outlined"
                  fullWidth
                  id="adress"
                  label="Adress"
                  error={Boolean(errors.adress)}
                  helperText={
                    errors.adress
                      ? errors.adress.type === "minLength"
                        ? "Adress lenght needs to be more than 5"
                        : "Adress is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="city"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  color="secondary"
                  variant="outlined"
                  fullWidth
                  id="city"
                  label="City"
                  error={Boolean(errors.city)}
                  helperText={
                    errors.city
                      ? errors.city.type === "minLength"
                        ? "City lenght needs to be more than 1"
                        : "City is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="postal"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  color="secondary"
                  variant="outlined"
                  fullWidth
                  id="postal"
                  label="Postal Code"
                  error={Boolean(errors.postal)}
                  helperText={
                    errors.postal
                      ? errors.postal.type === "minLength"
                        ? "Postal Code lenght needs to be more than 1"
                        : "Postal Code is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  color="secondary"
                  variant="outlined"
                  fullWidth
                  id="country"
                  label="Country"
                  error={Boolean(errors.country)}
                  helperText={
                    errors.country
                      ? errors.country.type === "minLength"
                        ? "Country lenght needs to be more than 1"
                        : "Country is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              type="button"
              onClick={chooseLocationHandler}
            >
              Choose on map
            </Button>
            <Typography>
              {location.lat && `${location.lat}, ${location.lat}`}
            </Typography>
          </ListItem>
          <ListItem>
            <Button variant="contained" fullWidth color="primary" type="submit">
              Continue
            </Button>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Shipping), {
  ssr: false,
});
