import Layout from "@/components/Layout";
import { CardActionArea, CardMedia, Grid, Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import data from "@/utils/data";
import NextLink from 'next/link';

export default function Home() {
  return (
    <>
      <Layout title='Home'>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title={product.name}
                  />
                  <CardContent>
                    <Typography>
                      {product.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography>
                    ${product.price}
                  </Typography>
                  <Button size="small" color="primary">Add To Cart</Button>
                </CardActions>
                </NextLink>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Layout>
    </>
  );
}
