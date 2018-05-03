const mongoose = require('mongoose');

// définir la structure de mon modèle photo
var resistorEventSchema  = mongoose.Schema({
	"cmd" : {type : String},
	"name": {type : String},
	"result": {type : Number},
	"device_id": {type : String},
});

//Création du model : nom, schéma
var resistorEvent = mongoose.model('resistorEvent', resistorEventSchema);

module.exports = resistorEvent;