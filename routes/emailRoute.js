const express = require("express");
const { email } = require("../controllers/emailController");

const router = express.Router()

router.post("/contact", email)




module.exports = router