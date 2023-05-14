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

const isAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    //Bearer(7)
    const token = authorization.slice(7, authorization.lenght);
    jwt.verify(token, process.env.JTW_SECRET, (error, decode) => {
      if (error) {
        res.status(401).send({ message: "Token is not valid" });
      } else {
        req.user = decode;//user data
        next();
      }
    });
  } else {
    res.status(401).send({ message: "Token is not given" });
  }
};

const isAdmin = async (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: 'User is not admin' });
  }
};

export { signToken, isAuth, isAdmin };
