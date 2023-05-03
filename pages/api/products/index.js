import Product from "@/models/Products";
import db from "@/utils/db";
import nextConnect from "next-connect";

const handler = nextConnect();

handler.get(async (req, res) => {
    await db.connect();
    const products = await Product.find({});
    await db.disconnect();
    res.send(products)
});

export default handler;