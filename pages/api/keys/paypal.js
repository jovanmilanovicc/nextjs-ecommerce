import { isAuth } from "@/utils/auth";
import nextConnect from "next-connect";

const handler = nextConnect();
handler.use(isAuth)

handler.get(async (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

export default handler;