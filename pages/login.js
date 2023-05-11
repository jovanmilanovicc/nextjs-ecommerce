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
import NextLink from "next/link";
import axios from "axios";
import { Store } from "@/utils/store";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { Controller, useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { getError } from "@/utils/error";

function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const classes = useStyles();
  const router = useRouter();
  const { dispatch, state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, []);

  const onSubmitHandler = async ({ email, password }) => {
    closeSnackbar();
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });

      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", JSON.stringify(data));
      router.push("/");
    } catch (e) {
      enqueueSnackbar( e.response && e.response.data && e.response.data.message
        ? e.response.data.message
        : e.message, {
        variant: "error",
        autoHideDuration: 5000
      });
    }
  };

  return (
    <Layout title="login">
      <form className={classes.form} onSubmit={handleSubmit(onSubmitHandler)}>
        <Typography variant="h1" component="h1">
          Login
        </Typography>
        <List>
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
                required: true,
                minLength: 6,
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
                      ? errors.password.type === "minLength"
                        ? "Password length need to be more than 5"
                        : "Password is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Button variant="contained" fullWidth color="primary" type="submit">
              Login
            </Button>
          </ListItem>
          <ListItem>
            Dont have an account? &nbsp;
            <NextLink className={classes.link} href="/register">
              Register
            </NextLink>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Login), {
  ssr: false,
});
