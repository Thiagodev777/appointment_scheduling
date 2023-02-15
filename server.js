import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

import connection from "./src/database/mysql/connection.js";
import patientRoute from "./src/routes/patient.route.js";

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/patient", patientRoute);
app.use((req, res) => {
  return res.status(404).json({ message: "route not found" });
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
