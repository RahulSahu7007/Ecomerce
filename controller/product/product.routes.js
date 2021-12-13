import express from "express";
import { createProductValidation, updateProductValidation } from "./product.validation";
import { createNewProduct, getAllProduct, getOneProductDetails, updateProduct, deleteProductById }  from "./product.controller"
const router = express.Router();

router.post("/create_product", createProductValidation, createNewProduct);
router.get("/get_allProduct",  getAllProduct);
router.get("/get_product/:id", updateProductValidation, getOneProductDetails);
router.put("/update_product/:id",updateProductValidation, updateProduct);
router.delete("/get_allProduct/:id",updateProductValidation,  deleteProductById);

export default router
