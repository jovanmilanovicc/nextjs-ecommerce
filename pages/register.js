import Layout from "@/components/Layout";
import {
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import useStyles from "@/utils/styles";
import NextLink from "next/link";
import axios from "axios";
import { Store } from "@/utils/store";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";

function Login() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const classes = useStyles();
  const router = useRouter();
  const { state, dispatch } = useContext(Store);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password dont match");
      return;
    }

    const { data } = await axios.post("/api/users/register", {
      name,
      email,
      password,
    });

    dispatch({ type: "USER_LOGIN", payload: data });
    Cookies.set("userInfo", JSON.stringify(data));
    router.push("/");
  };

  return (
    <Layout title="Register">
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <Typography variant="h1" component="h1">
          Register
        </Typography>
        <List>
          <ListItem>
            <TextField
              color="secondary"
              variant="outlined"
              fullWidth
              id="name"
              label="Name"
              inputProps={{ type: "name" }}
              onChange={(e) => setName(e.target.value)}
            ></TextField>
          </ListItem>
          <ListItem>
            <TextField
              color="secondary"
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              inputProps={{ type: "email" }}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
          </ListItem>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
              inputProps={{ type: "password" }}
              color="secondary"
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </ListItem>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="confirmPassword"
              label="Confirm Password"
              inputProps={{ type: "password" }}
              color="secondary"
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></TextField>
          </ListItem>
          <ListItem>
            <Button variant="contained" fullWidth color="primary" type="submit">
              Register
            </Button>
          </ListItem>
          <ListItem>
            Already hav an account? &nbsp;
            <NextLink className={classes.link} href="/login">
              Login
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
