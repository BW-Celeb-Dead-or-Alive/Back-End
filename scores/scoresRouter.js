const router = require("express").Router();
const addScores = require("./scoresModel");

router.put("/api/users/:id", (req, res) => {
  const updated = req.body;
  console.log(req.body);
  const { id } = req.params;

  if (updated.score) {
    Users.addScores(updated, id)
      .then(() => {
        res.status(200).json(updated);
      })
      .catch(err => {
        res.status(500).json({ message: "error adding score to user" });
      });
  } else {
    res.status(400).json({ error: "there has been no changes to the score" });
  }
});
