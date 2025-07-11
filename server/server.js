// dito mo na ilalagay yung ganitong code
const app = require('./app'); // Import the Express app from app.json
const db = require('./dbconfig/db');
const PORT = process.env.PORT || 5000; // Set the port to the value in the environment variable or default to 5000
const adminRoutes = require('./routes/adminRoutes');
const principalRoutes = require('./routes/principalRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const parentRoutes = require('./routes/parentRoutes');
const studentRoutes = require('./routes/studentRoutes');
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1); // Exit the process if the connection fails
  }
  console.log('Connected to the database');
});

app.get('/', (req, res) => {
  res.send('Server is Ready!'); // Send a simple response for the root route
});
app.use('/admins', adminRoutes);
app.use('/principals', principalRoutes);
app.use('/teachers', teacherRoutes);
app.use('/parents', parentRoutes);
app.use('/students', studentRoutes); // Use the student routes for handling student-related requests

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}}`); // Log a message indicating the server is running
});
