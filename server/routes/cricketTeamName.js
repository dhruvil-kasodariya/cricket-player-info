const router = require("express").Router();
const Teams = require("../models/Teams");

//add team name

router.post("/addTeamName", async (req, res) => {
  const newTeamData = await new Teams({
    teamId: req.body.teamId,
    teamName: req.body.teamName,
    teamSName: req.body.teamSName,
    imageId: req.body.imageId,
  });

  try {
    const savedTeamData = await newTeamData.save();
    res.status(201).json(savedTeamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getTeamsData", async (req, res) => {
  try {
    const teamsData = await Teams.find();
    res.status(200).json(teamsData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/getteamData/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const teamData = await Teams.findById({ _id: id });
    res.status(200).json(teamData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/updateteampatch/:id", async (req, res) => {
  try {
    let id = req.params.id;

    const upadateData = await Teams.findByIdAndUpdate(
      { _id: id },
      {
        imageUrl: req.body.imageUrl,
      }
    );

    res.status(201).json(upadateData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
