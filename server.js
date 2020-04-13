const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker", { useNewUrlParser: true, useFindAndModify: false });

(require("./controllers/html-routes.js"))(app);
(require("./controllers/api-routes.js"))(app);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});