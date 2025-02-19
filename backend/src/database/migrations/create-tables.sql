-- User Table
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP  -- Adding a timestamp for updates
);

-- User Inventory Table
CREATE TABLE IF NOT EXISTS user_inventory (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    ingredient_id INTEGER NOT NULL,
    quantity REAL NOT NULL,
    expiration_date TEXT,  -- Expiration date can be nullable
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(id)
);

-- Categories Table (for Ingredient Categories)
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

-- Ingredients Table
CREATE TABLE IF NOT EXISTS ingredients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category_id INTEGER NOT NULL,
    quantity REAL NOT NULL,
    unit TEXT NOT NULL CHECK(unit IN ('kg', 'g', 'ml', 'l', 'pieces')),  -- Unit validation
    expiration_date TEXT DEFAULT NULL,  -- Expiration date is optional
    description TEXT DEFAULT NULL,  -- Adding description for ingredients
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Ingredient Substitutes Table
CREATE TABLE IF NOT EXISTS ingredient_substitutes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ingredient_id INTEGER NOT NULL,
    substitute_id INTEGER NOT NULL,
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(id),
    FOREIGN KEY (substitute_id) REFERENCES ingredients(id)
);

-- Recipe Categories Table
CREATE TABLE IF NOT EXISTS recipe_categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

-- Recipes Table
CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    instructions TEXT NOT NULL,
    category_id INTEGER NOT NULL,
    serving_size INTEGER,  -- Number of servings
    cooking_time INTEGER,  -- Cooking time in minutes
    FOREIGN KEY (category_id) REFERENCES recipe_categories(id)
);

-- Recipe Instructions Table (Steps)
CREATE TABLE IF NOT EXISTS recipe_steps (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    recipe_id INTEGER NOT NULL,
    step_number INTEGER NOT NULL,
    instruction TEXT NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);

INSERT INTO ingredients (name, category_id, quantity, unit, expiration_date, description)
VALUES 
    ('Carrot', 1, 100, 'g', NULL, NULL),
    ('Tomato Sauce', 2, 50, 'g', '2025-01-01', 'Homemade tomato sauce'),
    ('Potatoes', 1, 3, 'pieces', NULL, NULL),
    ('Onion', 1, 1, 'pieces', NULL, NULL),
    ('Garlic', 1, 1, 'pieces', NULL, NULL),
    ('Chicken Meat', 3, 500, 'g', NULL, NULL);


INSERT INTO categories (name) VALUES
    ('Vegetables'),
    ('Liquids/Sauces'),
    ('Meat'),
    ('Nuts'),
    ('Other');

-- PRAGMA table_info(ingredients);
