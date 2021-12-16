const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const droneSchema = new Schema({
    velocity: { type: Number, required: true },
    distance: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;