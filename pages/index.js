import Layout from "@/components/Layout";
import { Grid } from "@material-ui/core";
import db from "@/utils/db";
import Product from "@/models/Products";
import dynamic from "next/dynamic";
import axios from "axios";
import { Store } from "@/utils/store";
import { useContext } from "react";
import { useRouter } from "next/router";
import ProductItem from "@/components/ProductItem";

function Home(props) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((a) => a._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert("Product is out of sstock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };

  return (
    <>
      <Layout title="Home">
        <h1>Products</h1>
        <Grid container spacing={3}>
          {props.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <ProductItem
                product={product}
                addToCartHandler={addToCartHandler}
              />
            </Grid>
          ))}
        </Grid>
      </Layout>
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}, "-reviews").lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
