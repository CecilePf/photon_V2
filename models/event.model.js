const mongoose = require('mongoose');

// définir la structure de mon modèle photo
var eventSchema  = mongoose.Schema({
	"data" : String,
	"ttl" : Number,
	"published_at" : String,
	"coreid" : String,
	"name" : String
});

//Création du model : nom, schéma
var Event = mongoose.model('events', eventSchema);

module.exports = Event;