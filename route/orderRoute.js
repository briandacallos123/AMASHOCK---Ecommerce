import express from "express";
import { createorder, getAllordersByCustomer, getAllordersByMerchant } from "../controller/orderController.js";
const route = express.Router();

route.post('/', createorder)
route.post('/customer', getAllordersByCustomer)
route.get('/merchant', getAllordersByMerchant)



export default route;