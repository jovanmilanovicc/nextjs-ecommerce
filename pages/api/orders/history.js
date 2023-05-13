import Order from "@/models/Order";
import db from "@/utils/db";
import nextConnect from "next-connect";
import { onError } from "@/utils/error";
import { isAuth } from "@/utils/auth";

const handler = nextConnect({
    onError,
});

handler.use(isAuth);

handler.get( async(req, res) => {
    await db.connect();
    const orders = await Order.find({user: req.user._id});
    res.send(orders);
})

export default handler;