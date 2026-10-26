const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'MealMate API',
    version: '0.1.0',
    endpoints: {
      recipes: '/api/recipes',
      ingredients: '/api/ingredients',
      shopping: '/api/shopping'
    }
  });
});

// Recipe routes
app.get('/api/recipes', (req, res) => {
  // TODO: Return recipes with optional filtering
  res.json({ recipes: [] });
});

app.get('/api/recipes/search', (req, res) => {
  // TODO: Search recipes by ingredients
  res.json({ recipes: [] });
});

// Ingredient routes
app.get('/api/ingredients', (req, res) => {
  // TODO: Return pantry ingredients
  res.json({ ingredients: [] });
});

app.post('/api/ingredients', (req, res) => {
  // TODO: Add ingredient to pantry
  res.json({ message: 'Ingredient added' });
});

app.delete('/api/ingredients/:id', (req, res) => {
  // TODO: Remove ingredient from pantry
  res.json({ message: 'Ingredient removed' });
});

// Shopping routes
app.get('/api/shopping', (req, res) => {
  // TODO: Return shopping list
  res.json({ items: [] });
});

app.post('/api/shopping', (req, res) => {
  // TODO: Add item to shopping list
  res.json({ message: 'Item added to shopping list' });
});

app.put('/api/shopping/:id', (req, res) => {
  // TODO: Update shopping list item
  res.json({ message: 'Item updated' });
});

app.delete('/api/shopping/:id', (req, res) => {
  // TODO: Remove item from shopping list
  res.json({ message: 'Item removed from shopping list' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`MealMate API server running on http://localhost:${PORT}`);
});
