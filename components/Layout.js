import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import React from "react";
import useStyles from "@/utils/styles";
import NextLink from "next/link";

function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Nextjs ecommerce</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Typography className={classes.brand}>Ecommerce</Typography>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref className={classes.rightNavbar}>
             Cart
            </NextLink>
            <NextLink href="/login" passHref className={classes.rightNavbar}>
              Login
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All right reserved. Neki naslov</Typography>
      </footer>
    </div>
  );
}

export default Layout;
