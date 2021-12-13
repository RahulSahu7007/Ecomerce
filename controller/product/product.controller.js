import product from "../../model/product";
import category from "../../model/category"
import { isEmpty } from "lodash";


/**
 * If You are going to create new product
 * So valid category Id is required;
 * if no category is inserted yet then First of all insert the new category in category Model
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
module.exports.createNewProduct = async (req, res)=>{
    try {
        const params = req.body;
        //checking categoryId is In Database or not;
        const checkingCategoryId = await category.findById(params.categoryId);
        if(isEmpty(checkingCategoryId)){
           return res.status(401).send({
               success: false,
               msg: "Please Insert Valid Category Id"
           })
        }
        const getExistingProduct = await product.findOne({name: params.name, categoryId: params.categoryId});
        if(!isEmpty(getExistingProduct)){
            res.status(401).send({
                success: false,
                msg: "Product is already existing"
            })
        }else{
            const saveNewProduct = await product(params);
            saveNewProduct.save();
            res.status(200).send({
                success: true,
                msg: saveNewProduct
            })
        }
    } catch (err) {
        res.status(401).send({
            success: false,
            msg: err
        })
    }
}

module.exports.getAllProduct = async (req, res)=>{
    try {
        const getData = await product.find({}).populate("categoryId").lean();
        res.status(200).send({
            success: true,
            msg: getData
        })
    } catch (err) {
        res.status(401).send({
            success: false,
            msg: err
        })
    }
}

module.exports.getOneProductDetails = async (req, res)=>{
    try {
        const {id} = req.params
        const getData = await product.findById(id).populate("categoryId").lean();
        res.status(200).send({
            success: true,
            msg: getData
        })
    } catch (err) {
        res.status(401).send({
            success: false,
            msg: err
        })
    }
}

module.exports.updateProduct = async (req, res)=>{
    try {
        const {id} = req.params;
        const data = req.body;
        await product.findByIdAndUpdate(id, data, {new: true});
        const getData = await product.findById(id).populate("categoryId").lean();
        res.status(200).send({
            success: true,
            msg: getData
        })
    } catch (err) {
        res.status(401).send({
            success: false,
            msg: err
        })
    }
}

module.exports.deleteProductById = async(req, res)=>{
    try {
        const { id } = req.params;
        console.log(id)
        const data = await product.findByIdAndDelete({_id: id}).exec()
        res.status(200).send({
            success: true,
            msg: data
        })
    } catch (err){
        console.log(err);
        res.status(401).send({
            success: false,
            msg: err
        })
    }
}





