import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";

const createUserController = async (req, res) => {
  try {
    const { username, email, password, country } = req.body;
    if (!username || !email || !password || !country) {
      throw new ApiError(404, "All fields are required.");
    }

    const user = await User.create({
      username,
      email,
      password,
      country,
    });
    if (!user) {
      throw new ApiError(404, "Something went wrong to create user");
    }
    const savedUser = await user.save();
    if (!savedUser) {
      throw new ApiError(
        404,
        "Something went wrong to store userData in database"
      );
    }
    res.status(200).json("User created successfully");
  } catch (error) {
    console.log("error :", error);
  }
};

const updateUserController = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      throw new ApiError(404, "UserId is required to update user");
    }
    const { username } = req.body;
    if (!username) {
      throw new ApiError(404, "username is required");
    }
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: { username },
      },
      { new: true }
    );

    if (!updatedUser) {
      throw new ApiError(404, "Something went wrong to update user");
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("Error :", error);
  }
};

const deleteUserController = async (req, res) => {
  const { userId } = req.params;
  if (!userId) {
    throw new ApiError(404, "UserId is required to delete user");
  }
  await User.findByIdAndDelete(userId);
  res.status(200).json("User deleted successfully");
};

export { createUserController, updateUserController, deleteUserController };
