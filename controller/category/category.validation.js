async function createCategoryValidation(req, res, next){
    const params = req.body;
    const requiredParams = ['name'];
    const allowedParams = ['name'];

    let failed = false;

    Object.keys(params).forEach((element) => {
        if (!allowedParams.includes(element)) failed = true
    });
    requiredParams.forEach((element) => {
        if (!params[element]) failed = true
    });

    if(failed){
        res.status(401);
        res.send({
            success: false,
            msg: "Invalid Params"
        })
    }
    return next()
}


async function deleteCategoryValidation(req, res, next){
    const params = req.params;
    const requiredParams = ['id'];
    const allowedParams = ['id'];

    let failed = false;

    Object.keys(params).forEach((element) => {
        if (!allowedParams.includes(element)) failed = true
    });
    requiredParams.forEach((element) => {
        if (!params[element]) failed = true
    });

    if(failed){
        res.status(401);
        res.send({
            success: false,
            msg: "Invalid Params"
        })
    }
    return next()
}

module.exports = {
    createCategoryValidation,
    deleteCategoryValidation
}
