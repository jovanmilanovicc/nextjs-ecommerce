import Product from "@/models/Products";
import db from "@/utils/db";
import nextConnect from "next-connect";

const handler = nextConnect();

handler.get(async (req, res) => {
    await db.connect();
    const product = await Product.findById(req.query.id);
    await db.disconnect();
    res.send(product)
});

export default handler;