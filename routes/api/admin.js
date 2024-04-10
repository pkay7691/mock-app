const express = require('express');

const router = express.Router();

// Mark a draft as complete
router.post('/drafts/:draftId/complete', (req, res) => {
  // Your code here
});

// End a tournament
router.post('/tournaments/:tournamentId/end', (req, res) => {
  // Your code here
});

// Get a list of all users (for admin panel)
router.get('/users', (req, res) => {
  // Your code here
});

// Delete a user (admin privilege required)
router.delete('/users/:userId', (req, res) => {
  // Your code here
});

module.exports = router;
