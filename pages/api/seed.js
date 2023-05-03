import Product from "@/models/Products";
import data from "@/utils/data";
import db from "@/utils/db";
import nextConnect from "next-connect";

const handler = nextConnect();

handler.get(async (req, res) => {
    await db.connect();
    await Product.deleteMany();
    await Product.insertMany(data.products)
    await db.disconnect();
    res.send({message: 'Seeded ok'})
});

export default handler;