const req = require('supertest')
const server = require('../../index')
const newMonth = require('../mock-data/new-month.json')
const MonthController = require('../controllers/month_controller')
const MonthModel = require('../models/month_model')

const endpointUrl = '/months/'

describe(endpointUrl, () => {
    it('should call MonthModel.create', () => {
        MonthController.createMonth()
        expect(MonthModel.create).toBeCalled()
    })

    // it('POST' + endpointUrl, async () => {
    //     const res = await req(server)
    //         .post(endpointUrl)
    //         .send(newMonth)
    //     expect(res.statusCode).toBe(201)
    //     expext(res.body.month).toBe(newMonth.month)
    //     firstMonth = res.body._id
    // })
})