import express from "express";
import { createProduct, getAllProducts, getAllProductsByMerchant } from "../controller/productController.js";
const route = express.Router();

route.post('/', createProduct);
route.get('/', getAllProducts);
route.get('/merchant', getAllProductsByMerchant);


export default route;