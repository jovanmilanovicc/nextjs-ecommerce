import Layout from "@/components/Layout";
import data from "@/utils/data";
import { useRouter } from "next/router";
import NextLink from "next/link";
import useStyles from "@/utils/styles";
import {
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
import Image from "next/legacy/image";

function ProductDetails() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((e) => e.slug === slug);
  if (!product) {
    return <div>product not found</div>;
  }
  return (
    <Layout title={product.name}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          Back to products
        </NextLink>
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
            <ListItem><h1>{product.name}</h1></ListItem>
              <ListItem>Category: {product.category}</ListItem>
              <ListItem>Brand: {product.brand}</ListItem>
              <ListItem>
                Rating: {product.rating} start ({product.numReviews} reviews)
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
                <Button fullWidth variant="contained" color="primary">
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default ProductDetails;
