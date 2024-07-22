const express = require('express');

const router = express.Router();

// GET all available mock drafts
router.get('/api/drafts', (req, res) => {
  // Your code here
});

// GET details of a specific mock draft
router.get('/api/drafts/:draftId', (req, res) => {
  // Your code here
});

// POST create a new mock draft
router.post('/api/drafts/:draftId', (req, res) => {
  // Your code here
});

// PUT update an existing mock draft
router.put('/api/drafts/:draftId/edit', (req, res) => {
  // Your code here
});

// DELETE delete a mock draft
router.delete('/api/drafts/:draftId/delete', (req, res) => {
  // Your code here
});

// GET all players available for drafting
router.get('/api/drafts/:draftId/players', (req, res) => {
  // Your code here
});

// POST make a pick in the draft
router.post('/api/drafts/:draftId/pick', (req, res) => {
  // Your code here
});

module.exports = router;
