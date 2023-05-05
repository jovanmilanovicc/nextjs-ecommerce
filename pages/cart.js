import Layout from "@/components/Layout";
import { Store } from "@/utils/store";
import {
  Button,
  Grid,
  List,
  ListItem,
  MenuItem,
  Select,
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
import React, { useContext } from "react";

function CartScreen() {
  const { state } = useContext(Store);
  return (
    <Layout title="Shoping Cart">
      <Typography component="h1" variant="h1">
        Shoping Cart
      </Typography>
      {state.cart.cartItems.length === 0 ? (
        <div>
          Cart is empty <NextLink href="/"></NextLink>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {state.cart.cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <NextLink href={`/product/${item.slug}`}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={52}
                          ></Image>
                        </NextLink>
                      </TableCell>
                      <TableCell>
                        <NextLink href={`/product/${item.slug}`}>
                          <Typography>{item.name}</Typography>
                        </NextLink>
                      </TableCell>
                      <TableCell align="right">
                        <Typography>
                          <Select value={item.quantity}>
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <MenuItem key={x + 1} value={x + 1}>
                                {x + 1}
                              </MenuItem>
                            ))}
                          </Select>
                        </Typography>
                      </TableCell>
                      <TableCell align="right">${item.price}</TableCell>
                      <TableCell align="right">
                        <Button variant="contained" color="secondary">
                          X
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid md={3} xs={12}>
            <List>
              <ListItem>
                <Typography variant="h2">
                  Subtotal (
                  {state.cart.cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                  items) : $
                  {state.cart.cartItems.reduce(
                    (a, c) => a + c.quantity * c.price,
                    0
                  )}
                </Typography>
              </ListItem>
              <ListItem>
                <Button variant="contained" color="primary">
                  Check out
                </Button>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}

export default CartScreen;
