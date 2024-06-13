import express, { Router } from "express";
import {
  createUserController,
  deleteUserController,
  updateUserController,
} from "../controllers/user.controller.js";
const router = Router();

router.route("/create-user").post(createUserController);
router.route("/update-user/:userId").patch(updateUserController);
router.route("/delete-user/:userId").delete(deleteUserController);

export default router;
