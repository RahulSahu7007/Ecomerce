import category from "../../model/category"
import {isEmpty} from "lodash";

module.exports.createCategory = async (req, res)=>{
    try {
        const params = req.body;
        const getCategory = await category.findOne({name: params.name});
        if(!isEmpty(getCategory)){
            res.status(401).send({
                success: false,
                msg: "This category already Exists"
            })
        }else{
            const saveCategory = await category({
                name: params.name
            });
            saveCategory.save();
            res.status(200).send({
                success: true,
                msg: saveCategory
            })
        }
    } catch (err){
        console.log(err);
        res.status(401).send({
            success: false,
            msg: err
        })
    }
}

module.exports.getAllCategory = async (req, res)=>{
    try {
        const getAllcategory = await category.find({}).exec()
        res.status(200).send({
            success: true,
            msg: getAllcategory
        })
    } catch (err){
        console.log(err);
        res.status(401).send({
            success: false,
            msg: err
        })
    }
}

module.exports.deleteCategoryById = async(req, res)=>{
    try {
        const { id } = req.params;
        console.log(id)
        const data = await category.findByIdAndDelete({_id: id}).exec()
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
