import express from 'express';
import bodyParser from 'body-parser';
import recipeRoutes from './routes/recipeRoutes';

const app = express();

app.use(bodyParser.json());
app.use('/api', recipeRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});