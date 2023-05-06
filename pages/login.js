import Layout from "@/components/Layout";
import {
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "@/utils/styles";
import NextLink from "next/link";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const classes = useStyles();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      alert("Success login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Layout title="login">
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <Typography variant="h1" component="h1">
          Login
        </Typography>
        <List>
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

export default Login;
