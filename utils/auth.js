import jwt from "jsonwebtoken";

const signToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JTW_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

export { signToken };
