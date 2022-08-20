const express = require("express");
const { restart } = require("nodemon");
const router = express.Router();

const Drone = require("../models/Drone.model.js");

// require the Drone model here

router.get("/drones", async (req, res, next) => {
  const drones = await Drone.find();
  res.json({ drones });
});

router.post("/drones", async (req, res, next) => {
  const bbDrones = req.body;

  try {
    const createdDrone = await Drone.create({
      name: bbDrones.name,
      propellers: bbDrones.propellers,
      maxSpeed: bbDrones.maxSpeed,
    });
    res.status(201).json(createdDrone);
  } catch (error) {
    res.status(400).json("Bad REQUEST");
  }
});

router.post("/drones/:id", async (req, res, next) => {
  const newDrone = req.body;

  try {
    const drone = await Drone.findByIdAndUpdate(
      req.params.id,
      {
        name: newDrone.name,
        propellers: newDrone.propellers,
        maxSpeed: newDrone.propellers,
      },

      { new: true }
    );
    res.json({ drone });
  } catch (error) {
    res.status(400).json("Bad REQUEST");
  }
});

router.delete("/drones/:id", async (req, res, next) => {
  await Drone.findByIdAndDelete(req.params.id);

  res.sendStatus(204);
});

module.exports = router;
