const express = require("express");
const app = express();
const connectDB = require("./config/db");

// Connect to Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/ingredient", require("./routes/ingredient"));
app.use("/api/dish", require("./routes/dish"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});
