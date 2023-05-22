const mongoose = require("mongoose");

const CricketTeamNameSchma = new mongoose.Schema(
  {
    teamId: { type: Number, require: true },
    teamName: { type: String, require: true },
    teamSName: { type: String, require: true },
    imageId: { type: Number, require: true },
    imageUrl: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teams", CricketTeamNameSchma);
