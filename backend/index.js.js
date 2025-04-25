require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// Routes
const todoRoutes = require('./routes/todos');
app.use('/api/todos', todoRoutes);

// DB Connect
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send("ToDo App Backend");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
