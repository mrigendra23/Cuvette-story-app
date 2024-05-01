const User = require("../Models/User");

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email, password) {
      const newUser = new User({
        email,
        password,
      });
    }
    await newUser.save();
    res.status(201).json({ message: "Registeration done Successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(`Error : ${error.message}`);
  }
};

module.exports = registerUser;
