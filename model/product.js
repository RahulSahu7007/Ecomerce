import mongoose from "mongoose";

const product = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stocks: {
        type: String
    },
    discontinue: {
        type: Boolean,
        default: false
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    }
},{
    timestamps: true
});


module.exports = mongoose.model("product", product);
