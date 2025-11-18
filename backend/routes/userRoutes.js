const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { getUserProfile } = require("../controllers/userController");

const router = express.Router();

// @route   GET /api/users/profile
// @desc    Get user profile
// @access  Private
router.route("/profile").get(protect, getUserProfile);

module.exports = router;
