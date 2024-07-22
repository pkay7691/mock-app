
const express = require('express');

const router = express.Router();

// GET: Get a list of all available tournaments
router.get('/api/tournaments', (req, res) => {
  // Your code here
});

// GET: Get details of a specific tournament
router.get('/api/tournaments/:tournamentId', (req, res) => {
  // Your code here
});

// POST: Create a new tournament
router.post('/api/tournaments/:tournamentId', (req, res) => {
  // Your code here
});

// PUT: Update an existing tournament
router.put('/api/tournaments/:tournamentId/edit', (req, res) => {
  // Your code here
});

// DELETE: Delete a tournament
router.delete('/api/tournaments/:tournamentId/delete', (req, res) => {
  // Your code here
});

// POST: Register a user for a tournament
router.post('/api/tournaments/:tournamentId/register', (req, res) => {
  // Your code here
});

// POST: Start a tournament
router.post('/api/tournaments/:tournamentId/start', (req, res) => {
  // Your code here
});

// GET: Get current standings of the tournament
router.get('/api/tournaments/:tournamentId/standings', (req, res) => {
  // Your code here
});
