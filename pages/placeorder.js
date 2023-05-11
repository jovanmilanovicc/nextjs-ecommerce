import Layout from "@/components/Layout";
import dynamic from "next/dynamic";
import { Store } from "@/utils/store";
import {
  Button,
  Card,
  CircularProgress,
  Grid,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import NextLink from "next/link";
import React, { useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";
import useStyles from "@/utils/styles";
import CheckoutMenu from "@/components/Checkout";
import { closeSnackbar, useSnackbar } from "notistack";
import { getError } from "@/utils/error";
import axios from "axios";
import Cookies from "js-cookie";

function PlaceOrder() {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems, shippingAdress, paymentMethod },
    userInfo,
  } = state;
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!paymentMethod) {
      router.push("/payment");
    }
  }, []);

  const round = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

  const itemsPrice = round(
    cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
  );
  const shippingPrice = itemsPrice > 100 ? 0 : 15;
  const totalPrice = round(itemsPrice + shippingPrice);

  const placeOrderHandler = async () => {
    closeSnackbar();

    try {
      setIsLoading(true);
      closeSnackbar();
      const { data } = await axios.post(
        "/api/orders",
        {
          orderItems: cartItems,
          shippingAdress,
          paymentMethod,
          itemsPrice,
          shippingPrice,
          totalPrice,
        },
        {
          headers: {
            authorization: `Bearet ${userInfo.token}`,
          },
        }
      );

      dispatch({ type: "CART_CLEAR" });
      Cookies.remove("cartItems");
      setIsLoading(false);
      router.push(`/order/${data._id}`);
    } catch (e) {
      setIsLoading(false);

      enqueueSnackbar(getError(e), { variant: "error", autoHideDuration: 5000 });
    }
  };

  return (
    <Layout title="Place Order">
      <CheckoutMenu activeStep={3}></CheckoutMenu>
      <Typography component="h1" variant="h1">
        Place Order
      </Typography>

      <Grid container spacing={1}>
        <Grid item md={9} xs={12}>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Typography component="h2" variant="h2">
                  Shipping Address
                </Typography>
              </ListItem>
              <ListItem>
                {shippingAdress.fullName}, {shippingAdress.adress},{" "}
                {shippingAdress.city}, {shippingAdress.postal},{" "}
                {shippingAdress.country}
              </ListItem>
            </List>
          </Card>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Typography component="h2" variant="h2">
                  Payment Method
                </Typography>
              </ListItem>
              <ListItem>{paymentMethod}</ListItem>
            </List>
          </Card>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Typography component="h2" variant="h2">
                  Order Items
                </Typography>
              </ListItem>
              <ListItem>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cartItems.map((item) => (
                        <TableRow key={item._id}>
                          <TableCell>
                            <NextLink href={`/product/${item.slug}`}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={50}
                                height={50}
                              ></Image>
                            </NextLink>
                          </TableCell>

                          <TableCell>
                            <NextLink href={`/product/${item.slug}`}>
                              <Typography>{item.name}</Typography>
                            </NextLink>
                          </TableCell>
                          <TableCell align="right">
                            <Typography>{item.quantity}</Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography>${item.price}</Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Typography variant="h2">Order Summary</Typography>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Items:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right">${itemsPrice}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Shipping:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right">${shippingPrice}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>
                      <strong>Total:</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right">
                      <strong>${totalPrice}</strong>
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  onClick={placeOrderHandler}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Place Order
                </Button>
              </ListItem>
              {loading && (
                <ListItem>
                  <CircularProgress />
                </ListItem>
              )}
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(PlaceOrder), {
  ssr: false,
});
