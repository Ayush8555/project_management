const express = require("express");
const router = express.Router();

// @desc    API Status
// @route   GET /
// @access  Public
router.get("/", (req, res) => {
  res.json({
    message: "JWT Authentication API",
    version: "1.0.0",
    status: "active",
  });
});

module.exports = router;
