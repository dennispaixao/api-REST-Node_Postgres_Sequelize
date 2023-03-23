const Planet = require("../models/Planet");
const Satelite = require("../models/Satelite");
const Cap = require("../models/Cap");
const Spaceship = require("../models/Spaceship");


Planet.hasOne(Satelite, {onDelete:"CASCADE", onUpdate:"CASCADE"});
Satelite.belongsTo(Planet, {foireingKey: "planetId", as: "planet"});
/*
Planet.hasMany(Satelite, {onDelete:"CASCADE", onUpdate:"CASCADE"});
Satelite.belongsTo(Planet, {foireingKey: "planetId", as: "planet"});
*/
Cap.belongsToMany(Spaceship,{
    foreingKey:"capId",
    through:"capSpaceship",
    as: "spaceships"
})

Spaceship.belongsToMany(Cap,{
    foreingKey:"spaceshipID",
    through:"capSpaceship",
    as: "caps"
})



module.exports= { Planet, Satelite};