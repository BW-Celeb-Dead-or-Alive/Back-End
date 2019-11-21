const router = require("express").Router();
const Celebs = require("./celebsModel");

//---------------------------------------GET ALL CELEBRITIES---------------------------------------//

router.get("/", (req, res) => {
  Celebs.find()
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res.status(500).json({ message: "unable to get celeb data" });
    });
});

//---------------------------------------GET CELEBRITY BY ID---------------------------------------//

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Celebs.findById(id)
    .then(results => {
      if (results) {
        res.json(results);
      } else {
        res.status(404).json({ message: "could not get celeb with that id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "unable to get celebs" });
    });
});

module.exports = router;
