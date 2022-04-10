import { verifyToken } from "../middleware/auth"; 
import * as user from "../controllers/user";
import express from "express";

export function userRoute(app) {
  const router = express.Router();
  // register a new user
  router.post("/register", user.register);
  router.post("/login",  user.login);
  router.post("/welcome", verifyToken, user.welcome);

  app.use('/api', router);
}
