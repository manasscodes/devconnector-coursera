const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

// Make the Server
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));



//  Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Host the Server on a Port
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));