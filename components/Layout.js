import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react'
import useStyles from '@/utils/styles';

function Layout({ children }) {
    const classes = useStyles();
  return (
    <div>
        <Head>
        <title>Nextjs ecommerce</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <AppBar position='static' className={classes.navbar}>
            <Toolbar>
                <Typography>Ecommerce</Typography>
            </Toolbar>
        </AppBar>
        <Container className={classes.main}>
            {children}
        </Container>
        <footer className={classes.footer}>
            <Typography>
                All right reserved. Neki naslov
            </Typography>
        </footer>
    </div>
  )
}

export default Layout;
