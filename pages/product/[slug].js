import { useContext, useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import useStyles from "@/utils/styles";
import {
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  Button,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Image from "next/image";
import Product from "@/models/Products";
import db from "@/utils/db";
import axios from "axios";
import { Store } from "@/utils/store";
import dynamic from "next/dynamic";
import { useSnackbar } from "notistack";

function ProductDetails(props) {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const classes = useStyles();
  const { product } = props;

  const { enqueueSnackbar } = useSnackbar();

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        `/api/products/${product._id}/reviews`,
        {
          rating,
          comment,
        },
        {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }
      );
      setLoading(false);
      enqueueSnackbar("Review submitted successfully", { variant: "success" });
      fetchReviews();
    } catch (e) {
      setLoading(false);
      enqueueSnackbar(e.response && e.response.data && e.response.data.message
        ? e.response.data.message
        : e.message, { variant: "error" });
    }
  };

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(`/api/products/${product._id}/reviews`);
      setReviews(data);
    } catch (e) {
      enqueueSnackbar(e.response && e.response.data && e.response.data.message
        ? e.response.data.message
        : e.message, { variant: "error" });
    }
  };
  useEffect(() => {
    fetchReviews();
  });

  if (!product) {
    return <div>product not found</div>;
  }

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((a) => a._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert("Product is out of sstock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };

  return (
    <Layout title={product.name}>
      <div className={classes.section}>
        <Link href="/" passHref>
          <Typography>Back to products</Typography>
        </Link>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <Typography>
              <ListItem>
                <h1>{product.name}</h1>
              </ListItem>
              <ListItem>Category: {product.category}</ListItem>
              <ListItem>Brand: {product.brand}</ListItem>
              <ListItem>
                <Rating value={product.rating} readOnly></Rating>
                <Link href="#reviews">
                  <Typography>({product.numReviews} reviews)</Typography>
                </Link>
              </ListItem>
              <ListItem>
                Description:<Typography> {product.description} </Typography>
              </ListItem>
            </Typography>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0 ? "In stock" : "Out of stock"}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={addToCartHandler}
                >
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
      <List>
        <ListItem>
          <Typography name="reviews" id="reviews" variant="h2">
            Customer Reviews
          </Typography>
        </ListItem>
        {reviews.length === 0 && <ListItem>No review</ListItem>}
        {reviews.map((review) => (
          <ListItem key={review._id}>
            <Grid container>
              <Grid item className={classes.reviewItem}>
                <Typography>
                  <strong>{review.name}</strong>
                </Typography>
                <Typography>{review.createdAt.substring(0, 10)}</Typography>
              </Grid>
              <Grid item>
                <Rating value={review.rating} readOnly></Rating>
                <Typography>{review.comment}</Typography>
              </Grid>
            </Grid>
          </ListItem>
        ))}
        <ListItem>
          {userInfo ? (
            <form onSubmit={submitHandler} className={classes.reviewForm}>
              <List>
                <ListItem>
                  <Typography variant="h2">Leave your review</Typography>
                </ListItem>
                <ListItem>
                  <TextField
                    multiline
                    variant="outlined"
                    fullWidth
                    name="review"
                    label="Enter comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </ListItem>
                <ListItem>
                  <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  />
                </ListItem>
                <ListItem>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>

                  {loading && <CircularProgress></CircularProgress>}
                </ListItem>
              </List>
            </form>
          ) : (
            <Typography variant="h2">
              Please{" "}
              <Link href={`/login?redirect=/product/${product.slug}`}>
                login
              </Link>{" "}
              to write a review
            </Typography>
          )}
        </ListItem>
      </List>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const product = await Product.findOne({ slug }, '-reviews').lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
}

export default dynamic(() => Promise.resolve(ProductDetails), {
  ssr: false,
});
