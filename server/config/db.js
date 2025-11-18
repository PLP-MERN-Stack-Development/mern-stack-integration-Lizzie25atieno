// db.js - MongoDB connection helper for Week 4 Blog App
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // use .env variable directly
    console.log('MongoDB connected (Week 4)');
  } catch (err) {
    console.error('MongoDB connection error (Week 4):', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
