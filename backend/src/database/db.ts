
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Create a promise-based SQLite database instance
export const dbPromise = open({
  filename: './database.sqlite', // Your database file
  driver: sqlite3.Database,
});

// Function to initialize the database and create necessary tables if they don't exist
export const initDatabase = async () => {
  try {
    const db = await dbPromise; // Open the database
    console.log('Connected to the SQLite database.');

    // Create the 'ingredients' table if it doesn't exist
    await db.run(`
      CREATE TABLE IF NOT EXISTS ingredients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT UNIQUE,
        category TEXT,
        unit TEXT,
        description TEXT
      )
    `);

    // Create the 'user_inventory' table if it doesn't exist
    await db.run(`
      CREATE TABLE IF NOT EXISTS user_inventory (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        ingredient_id INTEGER,
        quantity INTEGER,
        FOREIGN KEY (ingredient_id) REFERENCES ingredients(id)
      )
    `);

    console.log('Database tables created or already exist.');
  } catch (error) {
    console.error('Error initializing the database:', error);
    throw error; // Rethrow to ensure the app doesn't continue running
  }
};
