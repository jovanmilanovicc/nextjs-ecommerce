import Layout from "@/components/Layout";
import { CardActionArea, CardMedia, Grid, Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import data from "@/utils/data";

export default function Home() {
  return (
    <>
      <Layout>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
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
              </Card>
            </Grid>
          ))}
        </Grid>
      </Layout>
    </>
  );
}
