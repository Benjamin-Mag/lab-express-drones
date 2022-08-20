const Drone = require("../models/Drone.model");
const mongoose = require("mongoose");

console.log("hello");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";
mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })

  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })

  .then(async () => {
    await Drone.deleteMany();
    console.log("Count of Drones", await Drone.count());

    const initialDrone = await Drone.create([
      {
        name: "billy Joe",
        propellers: 135,
        maxSpeed: 25000,
      },
      {
        name: "billy Hoe",
        propellers: 1,
        maxSpeed: 5000,
      },
      {
        name: "billy Bill",
        propellers: 13,
        maxSpeed: 15000,
      },
    ]);
    console.log(initialDrone);
    console.log("Count of Drones", await Drone.count());

    mongoose.disconnect(console.log("closed"));
  });
