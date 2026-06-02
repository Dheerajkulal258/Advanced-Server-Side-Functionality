const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const logger = require("./middleware/logger");
const productRoutes = require("./routes/productRoutes");
const startJob = require("./jobs/backgroundJob");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use(express.static("public"));

app.use("/api/products", productRoutes);

startJob();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});