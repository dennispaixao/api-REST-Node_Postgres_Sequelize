const Cap = require("../models/Cap");

module.exports = {
    async store(req, res){
        const {name, register_number} = req.body;

        const cap = await Cap.create({name, register_number});

        return res.json(cap)
    },
    async index(req, res){
        const cap = await Cap.findAll();
        return res.json(cap);
    }
}