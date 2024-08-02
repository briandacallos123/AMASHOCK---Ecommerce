import express from "express";
import { getCurrentUser } from "../controller/userController.js";
const route = express.Router();

route.get('/current-user',getCurrentUser )

export default route;