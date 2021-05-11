const mongoose = require('mongoose')

const MonthSchema = new mongoose.Schema({
    month: {
        type: Number,
        required: true
    },
    income: {
        type: Number,
        required: true
    },
    expenses: {
        type: Number,
        required: true
    },
    assets: {
        type: Number,
        required: true
    },
    cash: {
        type: Number,
        required: true
    },
    debt: {
        type: Number,
        required: true
    },
    networth: {
        type: Number,
        required: true
    }
})

const MonthModel = mongoose.model('Month', MonthSchema)

module.exports = MonthModel