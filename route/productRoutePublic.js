import express from "express";
import { getAllProducts } from "../controller/productController.js";
const route = express.Router();


route.get('/', getAllProducts);


export default route;