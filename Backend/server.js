const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/UserRoutes");
const cors = require("cors");
// const cookie=require("cookie-parser");
const dbconection = require("./database/dbconnection");
const app = express();

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5000;


app.use(
    cors({
        origin: [process.env.FRONTEND_URL, process.env.ADMIN_URL],
        methods: ["GET", "POST", "DELETE", "PUT"],
        credentials: true,
    })
);



app.use(express.json());
app.use(express.static("public"));
// app.use(cookie());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/user", userRoutes);

app.listen(PORT, (req, res) => {
    console.log(`Server is running at PORT: ${PORT}`);
});

