const Spaceship = require("../models/Spaceship");
const Cap = require("../models/Cap");


module.exports = {
    async store(req, res){
        const {capId} = req.params;
        const {name, capacity} = req.body;
        const cap = await Cap.findByPk(capId, {
            include: { association: "spaceships"},
        });

        if(!cap){
            res.send("Erro! esse capitão não está cadastrado");
        }

        const [spaceships] = await Spaceship.findOrCreate({
            where:{ name, capacity}
        })
        await cap.addSpaceship(spaceships);

        res.json(spaceships);
    },
    async index (req, res){
        const { capId } = req.params;

        const cap = await Cap.findByPk(capId, {
            include: { association: "spaceships"},
        });
     return res.json(cap);
    }


}