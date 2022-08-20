const { Schema, model } = require("mongoose");

const droneSchema = new Schema({
  name: Schema.Types.String,
  propellers: Schema.Types.Number,
  maxSpeed: Schema.Types.Number,
});

const Drone = model("Drone", droneSchema);

module.exports = Drone;
