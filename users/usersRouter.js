const router = require("express").Router();
const Users = require("./usersModel");

router.get("/", (req, res) => {
  Users.getAll()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => res.status(500).json({ error: err }));
});

router.post("/", (req, res) => {
  Users.addUser(req.body)
    .then(addedUser => {
      res.status(201).json(addedUser);
    })
    .catch(err => res.status(500).json({ error: err }));
});
module.exports = router;
