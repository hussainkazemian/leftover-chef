-- Create Users Table
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  family_name TEXT NOT NULL,
  phone_number TEXT,
  profession TEXT,
  age INTEGER
);

-- Create Profiles Table
CREATE TABLE profiles (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

-- Create Recipes Table
CREATE TABLE IF NOT EXISTS recipes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  ingredients TEXT NOT NULL,
  steps TEXT NOT NULL,
  category TEXT NOT NULL,
  allergies TEXT,
  images TEXT,
  created_by TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create Comments Table
CREATE TABLE comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  recipe_id INTEGER,
  user_id INTEGER,
  text TEXT NOT NULL,
  video_link TEXT,
  images TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(recipe_id) REFERENCES recipes(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
);

-- Create Likes Table
CREATE TABLE likes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  comment_id INTEGER,
  user_id INTEGER,
  FOREIGN KEY(comment_id) REFERENCES comments(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
);

-- Create Activities Table
CREATE TABLE activities (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  activity_type TEXT NOT NULL,
  activity_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

-- Insert Default Recipes
INSERT INTO recipes (title, description, user_id) VALUES 
('Vegan Soup', 'Delicious vegan soup...', 1),
('Vegetable Soup', 'Healthy vegetable soup...', 1),
('Gluten-Free Dish', 'Tasty gluten-free dish...', 1),
('Lactose-Free Dish', 'Yummy lactose-free dish...', 1),
('Spaghetti', 'Classic spaghetti recipe...', 1),
('Burger', 'Juicy burger...', 1),
('Banana Cake', 'Sweet banana cake...', 1),
('Tiramisu', 'Classic Italian Tiramisu...', 1),
('Omelette', 'Fluffy omelette...', 1);