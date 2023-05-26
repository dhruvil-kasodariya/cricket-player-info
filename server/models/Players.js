const mongoose = require("mongoose");

const TeamsPlayersSchma = new mongoose.Schema(
  {
    teamId: { type: Number, require: true },
    teamName: { type: String, require: true },
    players: [
      {
        id: { type: String },
        name: { type: String, require: true },
        imageId: { type: Number, require: true },
        role: { type: String, require: true },
        battingStyle: { type: String },
        bowlingStyle: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Players", TeamsPlayersSchma);
