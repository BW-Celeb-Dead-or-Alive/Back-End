const router = require("express").Router();
const Users = require("./usersModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

function generateToken(user) {
  const payload = {
    username: user.name,
    id: user.id
  };
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, process.env.JWT_SECRET || "PRIVATE", options);
}

router.get("/", (req, res) => {
  Users.getAll()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => res.status(500).json({ error: err }));
});

// router.post("/", (req, res) => {
//   Users.addUser(req.body)
//     .then(addedUser => {
//       res.status(201).json(addedUser);
//     })
//     .catch(err => res.status(500).json({ error: err }));
// });

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  Users.addUser({ username, password: bcrypt.hashSync(password, 8) })
    .then(id => {
      res.status(201).json({ message: "User registered!", id });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error registering user" });
    });
});

router.put("/:id", (req, res) => {
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

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  Users.findByUsername(username)
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: "Login Successful!",
          token
        });
      } else {
        res.status(401).json({ message: "Invalid password" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error logging in user" });
    });
});

module.exports = router;
