
function genericFunction(requiredParam, allowedParams, params){
    let failed = false;
    Object.keys(params).forEach((element) => {
        if (!allowedParams.includes(element)) failed = true
    });
    requiredParam.forEach((element) => {
        if (!params[element]) failed = true
    });
    return failed
}

async function createProductValidation(req, res, next){
    const param = req.body;
    const requiredParams = ["name", "quantity","price","stocks", "categoryId"];
    const allowedParams = ["name", "quantity","price","stocks", "discontinue", "categoryId"];
    if(genericFunction(requiredParams, allowedParams, param)){
       res.status(401).send({
           success: false,
           msg: "Invalid Params"
       })
    }
    return next();
}


async function updateProductValidation(req, res, next){
    const param = req.params;
    const requiredParams = ["id"];
    const allowedParams = ["id"];
    if(genericFunction(requiredParams, allowedParams, param)){
        res.status(401).send({
            success: false,
            msg: "Invalid Params"
        })
    }
    return next();
}

module.exports = {
    createProductValidation,
    updateProductValidation
}
