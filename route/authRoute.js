
import express from "express";
const route = express.Router();
// import { validateRegister } from "../middleware/validationMiddleware.js";
import { register, login } from "../controller/authController.js"

route.post('/register', register)
route.post('/login', login)



export default route;