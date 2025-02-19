import express from 'express';
import { initDatabase } from './database/db'; // Import the initDatabase function
import ingredientsRouter from './routers/ingredients'; // Import the router

const app = express();

// Middleware to parse JSON body
app.use(express.json());  // Built-in Express middleware for JSON

// Initialize the database
initDatabase().catch((err) => {
  console.error('Database initialization failed', err);
  process.exit(1); // Exit if the database initialization fails
});

// Mount the ingredients router
app.use(ingredientsRouter);

// Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
