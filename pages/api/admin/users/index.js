import nc from 'next-connect';
import { isAdmin, isAuth } from '@/utils/auth';
import User from '@/models/User';
import db from '@/utils/db';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const users = await User.find({});
  await db.disconnect();
  res.send(users);
});

handler.post(async (req, res) => {
  await db.connect();
  const random = Math.random().toString().slice(2, 6);
  const newUser = new User({
    name: "sample name",
    email: `sample-email${random}@gmail.com`,
    password: 'proba123',
    isAdmin: false
  });

  const user = await newUser.save();
  await db.disconnect();
  res.send({ message: "User Created", user });
});

export default handler;