import User from "../../models/User";
import jwt from "jsonwebtoken";

export default async (req, res) => {
  try {
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    //$ne = not equal
    const users = await User.find({ _id: { $ne: userId } }).sort({
      role: "asc",
    });
    res.status(200).json(users);
  } catch (errors) {
    console.error(errors);
    res.status(403).send("Please login again");
  }
};
