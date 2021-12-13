import express from "express";
import {createCategoryValidation, deleteCategoryValidation} from "./category.validation";
import {createCategory, getAllCategory, deleteCategoryById} from "./category.controller";
const router = express.Router();

router.post('/create_category', createCategoryValidation, createCategory)
router.get('/get_category', getAllCategory)
router.delete('/delete_category/:id', deleteCategoryValidation, deleteCategoryById)

export default router
