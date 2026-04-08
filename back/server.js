import express from "express";
import route from "./src/routes/server.route.js";
import dbConnect from "./src/database/server.db.js";
import cors from "cors";
const app = express();
const port = 2005;
app.use(cors());
app.use(express.json());
app.use("/web", route);
app.use("/uploads", express.static("uploads"));

dbConnect();
app.listen(port, () => {
  console.log("Server is running");
});
