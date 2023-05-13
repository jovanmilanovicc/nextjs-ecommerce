import NextLink from "next/link";
import Layout from "@/components/Layout";
import { getError } from "@/utils/error";
import { Store } from "@/utils/store";
import useStyles from "@/utils/styles";
import {
  Grid,
  Typography,
  Card,
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import Cookies from "js-cookie";

function Profile() {
  const router = useRouter();
  const classes = useStyles();
  const { state } = useContext(Store);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { userInfo } = state;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
  }, []);

  const onSubmitHandler = async ({
    name,
    email,
    password,
    confirmPassword,
  }) => {
    closeSnackbar();

    if (password !== confirmPassword) {
      enqueueSnackbar("Passwords dont match", {
        variant: "error",
        autoHideDuration: 5000,
      });
      return;
    }
    try {
      const { data } = await axios.put("/api/users/profile", {
        name,
        email,
        password,
      });

      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", JSON.stringify(data));
      enqueueSnackbar("Profile updated successfuly", { variant: "success" });
    } catch (e) {
      enqueueSnackbar(getError(e), {
        variant: "error",
        autoHideDuration: 5000,
      });
    }
  };

  return (
    <Layout title="Profile">
      <Grid container spacing={1}>
        <Grid item md={3} xs={12}>
          <Card className={classes.section}>
            <List>
              <NextLink href="/profile">
                <ListItem selected button component="a">
                  <ListItemText primary="User Profile"></ListItemText>
                </ListItem>
              </NextLink>
              <NextLink href="/order-history">
                <ListItem button component="a">
                  <ListItemText primary="Order History"></ListItemText>
                </ListItem>
              </NextLink>
            </List>
          </Card>
        </Grid>
        <Grid item md={9} xs={12}>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Typography component="h1" variant="h1">
                  Profile
                </Typography>
              </ListItem>
              <ListItem>
                <form
                  className={[classes.form]}
                  onSubmit={handleSubmit(onSubmitHandler)}
                >
                  <List>
                    <ListItem>
                      <Controller
                        name="name"
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
                            id="name"
                            label="Name"
                            inputProps={{ type: "name" }}
                            error={Boolean(errors.name)}
                            helperText={
                              errors.name
                                ? errors.name.type === "minLength"
                                  ? "Name lenght needs to be more than 1"
                                  : "Name is required"
                                : ""
                            }
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>
                    <ListItem>
                      <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        }}
                        render={({ field }) => (
                          <TextField
                            color="secondary"
                            variant="outlined"
                            fullWidth
                            id="email"
                            label="Email"
                            inputProps={{ type: "email" }}
                            error={Boolean(errors.email)}
                            helperText={
                              errors.email
                                ? errors.email.type === "pattern"
                                  ? "Email is not valid"
                                  : "Email is required"
                                : ""
                            }
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>
                    <ListItem>
                      <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{
                          validate: (value) =>
                            value === "" ||
                            value.length > 5 ||
                            "Password length is more than 5",
                        }}
                        render={({ field }) => (
                          <TextField
                            color="secondary"
                            variant="outlined"
                            fullWidth
                            id="password"
                            label="Password"
                            inputProps={{ type: "password" }}
                            error={Boolean(errors.password)}
                            helperText={
                              errors.password
                                ? "Password length need to be more than 5"
                                : ""
                            }
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>
                    <ListItem>
                      <Controller
                        name="confirmPassword"
                        control={control}
                        defaultValue=""
                        rules={{
                          validate: (value) =>
                            value === "" ||
                            value.length > 5 ||
                            "Confirm password length is more than 5",
                        }}
                        render={({ field }) => (
                          <TextField
                            color="secondary"
                            variant="outlined"
                            fullWidth
                            id="confirmPassword"
                            label="Confirm Password"
                            inputProps={{ type: "password" }}
                            error={Boolean(errors.confirmPassword)}
                            helperText={
                              errors.password
                                ? "Confirm Password length need to be more than 5"
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
                        fullWidth
                        color="primary"
                        type="submit"
                      >
                        Update
                      </Button>
                    </ListItem>
                  </List>
                </form>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Profile), {
  ssr: false,
});
