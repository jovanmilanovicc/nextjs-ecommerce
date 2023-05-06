import Layout from "@/components/Layout";
import {
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "@/utils/styles";
import NextLink from "next/link";

function Login() {
  const classes = useStyles();
  return (
    <Layout title="login">
      <form className={classes.form}>
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
            ></TextField>
          </ListItem>
          <ListItem>
            <Button variant="contained" fullWidth color="primary" type="submit">
              Login
            </Button>
          </ListItem>
          <ListItem>
            Dont have an account? &nbsp;<NextLink className={classes.link} href='/register'>Register</NextLink>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}

export default Login;
