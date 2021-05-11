const MonthModel = require('/../models/month_model')

exports.createMonth = async (req, res, next) => {
    try {
        const createdModel = await MonthModel.create(req.body)
        res.status(201).json(createdModel)
    } catch (err) {
        next(err)
    }
}