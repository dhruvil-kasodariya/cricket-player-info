const router = require("express").Router();
const Players = require("../models/Players");

// add teams Players

router.post("/addTeamsPlayers", async (req, res) => {
  const playersData = req.body;
  const newTeamsPlayers = await new Players(playersData);

  try {
    const savedData = await newTeamsPlayers.save();
    res.status(201).json(savedData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getTeamsPlayers/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const teamPlayers = await Players.findOne({ teamId: id });
    res.status(200).json(teamPlayers);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
