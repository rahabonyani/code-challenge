import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import generateToken from "../../utils/generateToken";
import User from "../../models/user";

// @Desc Login
// @Route /api/auth/loginAndRegister
// @Method POST
export const registerAndLogin = asyncHandler(
  async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      const newUser = new User({
        username,
        password,
      });

      await newUser.save();
      res.status(201).json({
        success: true,
        user: {
          username: newUser.username,
          token: generateToken(newUser._id),
        },
      });
    } else if (await user.comparePassword(password)) {
      res.status(201).json({
        success: true,
        user: {
          id: user._id,
          username: user.username,
          token: generateToken(user._id),
        },
      });
    } else {
      res.status(401);
      throw new Error("Email or password incorrect");
    }
  }
);
